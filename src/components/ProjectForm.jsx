import React, { Component } from "react";
import "aos/dist/aos.css";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query, // Import the 'query' function
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  setDoc,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import Cookies from "js-cookie";
import ProjectBanner from "./ProjectCard/ProjectBanner";

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "",
      title: "",
      desc: "",
      imgSrc: null,
      createdAt: Timestamp.fromDate(new Date()),
      projects: [],
      isEditing: false, // Track whether we are in edit mode
      editingProjectId: "", // Store the ID of the project being edited
      isDeleteModalOpen: false,
      deletingProjectId: null,
      isAuthorized: false,
    };
  }

  openDeleteModal = (projectId) => {
    this.setState({
      isDeleteModalOpen: true,
      deletingProjectId: projectId,
    });
  };

  closeDeleteModal = () => {
    this.setState({
      isDeleteModalOpen: false,
      deletingProjectId: null,
    });
  };

  AuthorizeUser() {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Remove loading once user state is retrieved
        await this.setState({ isAuthorized: true });
        // console.log("Login successful");
        // console.log(user);
        Cookies.set("token", user.accessToken, { expires: 1 / 24 });
      } else {
        this.setState({ isAuthorized: false });
      }
    });

    return () => unsubscribe();
  }

  async componentDidMount() {
    // Fetch and display the initial list of posts
    this.getProjects();
    this.AuthorizeUser();
  }

  async getProjects() {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const projectCollection = collection(firestore, "projects");
      const projectsOrder = query(
        projectCollection,
        orderBy("createdAt", "desc")
      ); // Define the query and order by 'createdAt' in descending order
      const querySnapshot = await getDocs(projectsOrder);
      const projects = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const projectId = doc.id; // Get the document ID
        const projectWithId = { projectId, ...data }; // Include the ID in the post data
        projects.push(projectWithId);
      });

      this.setState({ projects });
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
  }

  async sendProject() {
    const { title, desc, imgSrc } = this.state;
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const projectCollection = collection(firestore, "projects");
      const projectData = {
        title,
        desc,
        imgSrc, // Include the selected image files
        createdAt: Timestamp.fromDate(new Date()),
      };
      const docRef = await addDoc(projectCollection, projectData);
      console.log("Project written with ID: ", docRef.id);

      // Clear input fields
      this.setState({
        projectId: "",
        title: "",
        desc: "",
        style: "",
        VideoLink: "",
        imgSrc: null,
        createdAt: null, // Clear the selected image files
      });

      // Fetch and update the list of posts after adding a new post
      this.getProjects();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  async getProjectWithId(projectId) {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      // Reference a specific document in the "posts" collection using its ID
      const projectRef = collection(firestore, "projects", projectId);

      // Get the document data
      const docSnapshot = await getDoc(projectRef);

      if (docSnapshot.exists()) {
        const projectData = docSnapshot.data();
        console.log("Project data with ID ", projectId, ": ", projectData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  }

  // TODO when deleting project, delete all the content inside of it
  async deleteProject(projectId) {
    console.log("Deleting project with ID:", projectId);
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const storage = getStorage(app);

    //get the post with the id and then delete it and delete the image if there is one

    try {
      // Delete the post document
      const projectRef = doc(firestore, "projects", projectId);
      console.log("Project deleted successfully:", projectId);

      //get the image src
      const docSnapshot = await getDoc(projectRef);
      const projectData = docSnapshot.data();
      const imageSrc = projectData.imgSrc;

      // If there is an associated image, delete it from storage
      if (imageSrc) {
        console.log("Deleting image with name:", imageSrc);
        const imageRef = ref(storage, imageSrc);
        await deleteObject(imageRef);
        console.log("Image deleted successfully:", imageSrc);
      }

      // Delete the post document
      await deleteDoc(projectRef);
      // Fetch and update the list of posts after deleting a post
      this.getProjects();
    } catch (error) {
      console.error("Error deleting project and image: ", error);
    }
  }

  async uploadImage(imageFile) {
    try {
      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);

      if (this.state.isEditing) {
        //disable the update button
        document.getElementById("update").disabled = true;
        document.getElementById("update").innerHTML = "Uploading Image...";
        document.getElementById("update").classList.add("btn-disabled");
      } else {
        //diasble the submit button
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").innerHTML = "Uploading Image...";
        document.getElementById("submit").classList.add("btn-disabled");
      }

      // Upload the image file to Cloud Storage
      console.log("Uploading image...");
      console.log("Image file:", imageFile);
      console.log("Image file name:", imageFile.name);
      const storageRef = ref(
        storage,
        "gs://iig-data.appspot.com/" + imageFile.name
      );
      await uploadBytes(storageRef, imageFile);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Update the imgSrc in the component state
      this.setState({ imgSrc: downloadURL });

      console.log("Image uploaded successfully:", downloadURL);

      if (this.state.isEditing) {
        //enable the update button
        document.getElementById("update").disabled = false;
        document.getElementById("update").innerHTML = "Update";
        document.getElementById("update").classList.remove("btn-disabled");
      } else {
        //enable the submit button
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").innerHTML = "Post";
        document.getElementById("submit").classList.remove("btn-disabled");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  // Function to enter edit mode for a specific project
  enterEditMode = (projectId, title, desc, imgSrc) => {
    this.setState({
      isEditing: true,
      editingProjectId: projectId,
      title,
      desc,
      imgSrc,
    });
  };

  // Function to exit edit mode
  exitEditMode = () => {
    this.setState({
      isEditing: false,
      editingProjectId: "",
      title: "",
      desc: "",
      imgSrc: null,
    });
  };

  // Function to update an existing project
  async updateProject() {
    const { title, desc, imgSrc, editingProjectId } = this.state;
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const projectRef = doc(firestore, "projects", editingProjectId);
      const projectData = {
        title,
        desc,
        imgSrc,
      };
      await setDoc(projectRef, projectData, { merge: true }); // Use setDoc to update without overwriting
      console.log("Project updated successfully:", editingProjectId);

      this.exitEditMode(); // Exit edit mode after updating

      // Fetch and update the list of projects after editing
      this.getProjects();
    } catch (error) {
      console.error("Error updating project: ", error);
    }
  }
  render() {
    const { title, desc, projects, isEditing, editingProjectId } = this.state;

    return (
      <div>
        {/* Post Project */}
        {!isEditing && this.state.isAuthorized ? (
          <div className="container x-auto mt-8">
            <div class="my-4">
              <h1 className="block mb-2 text-lg font-medium text-base-content">
                Post a project
              </h1>
            </div>
            <div class="my-2">
              <label
                for="Title"
                class="block mb-2 text-sm font-medium text-base-content"
              >
                Title
              </label>
              <input
                type="text"
                class="input input-bordered input-primary w-full max-w-xs"
                placeholder="Title"
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>

            <div class="my-2">
              <label
                for="desc"
                class="block mb-2 text-sm font-medium text-base-content"
              >
                Body
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea textarea-primary w-full max-w-2xl h-52"
                value={desc}
                onChange={(e) => this.setState({ desc: e.target.value })}
              ></textarea>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-base-content"
                htmlFor="multiple_files"
              >
                Upload Post Image
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full"
                id="image_upload_input"
                onChange={(e) => {
                  // Call the uploadImage function when a file is selected
                  const file = e.target.files[0];
                  if (file) {
                    this.uploadImage(file);
                  }
                }}
              />

              {/* Display the image after uploading */}
              {this.state.imgSrc ? (
                <div className="my-4">
                  <img
                    src={this.state.imgSrc}
                    alt="Uploaded"
                    className="w-1/2 mx-auto"
                  />
                </div>
              ) : null}
            </div>
            <button
              id="submit"
              type="button"
              class="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
              onClick={() => {
                //upload the project
                this.sendProject();

                //clear the image input
                document.getElementById("image_upload_input").value = null;
              }}
            >
              Post
            </button>
          </div>
        ) : null}

        {/* Display Projects */}
        <div>
          <ul className="max-w-full">
            {projects.map((project, index) => (
              <div key={index}>
                {
                  <>
                    {/* Edit form */}
                    {isEditing && editingProjectId === project.projectId ? (
                      <div className="container x-auto mt-8">
                        <div className="my-4">
                          <h1 className="block mb-2 text-lg font-medium text-base-content">
                            Edit Project
                          </h1>
                        </div>
                        <div className="my-2">
                          <label
                            htmlFor="Title"
                            className="block mb-2 text-sm font-medium text-base-content"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Title"
                            value={title}
                            onChange={(e) =>
                              this.setState({ title: e.target.value })
                            }
                          />
                        </div>
                        <div className="my-2">
                          <label
                            htmlFor="desc"
                            className="block mb-2 text-sm font-medium text-base-content"
                          >
                            Body
                          </label>
                          <textarea
                            type="text"
                            placeholder="Description"
                            className="textarea textarea-primary w-full max-w-2xl h-52"
                            value={desc}
                            onChange={(e) =>
                              this.setState({ desc: e.target.value })
                            }
                          ></textarea>
                        </div>

                        <div>
                          <label
                            className="block mb-2 text-sm font-medium text-base-content"
                            htmlFor="multiple_files"
                          >
                            Upload Project Image
                          </label>
                          <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full"
                            id="image_upload_input"
                            onChange={(e) => {
                              // Call the uploadImage function when a file is selected
                              const file = e.target.files[0];
                              console.log(file);
                              if (file) {
                                this.uploadImage(file);
                              }
                            }}
                          />

                          {/* Display the image after uploading */}
                          {this.state.imgSrc ? (
                            <div className="my-4">
                              <img
                                src={this.state.imgSrc}
                                alt="Uploaded"
                                className="w-1/2 mx-auto"
                              />
                            </div>
                          ) : null}
                        </div>

                        <div className="space-x-4">
                          <button
                            id="update"
                            type="button"
                            className="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
                            onClick={() => this.updateProject()}
                          >
                            Update
                          </button>
                          <button
                            id="cancel"
                            type="button"
                            className="focus:outline-none btn btn-error w-full max-w-xs mx-auto mt-2"
                            onClick={() => this.exitEditMode()}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <ProjectBanner
                        title={project.title}
                        desc={project.desc}
                        Image={project.imgSrc}
                        id={project.projectId}
                        pos={index % 2}
                      />
                    )}
                    {this.state.isAuthorized ? (
                      <>
                        <p>project id: {project.projectId}</p>
                        <div className="container x-auto mt-8 space-x-4">
                          {/* Edit button */}
                          <button
                            className="btn btn-primary my-8"
                            onClick={() =>
                              this.enterEditMode(
                                project.projectId,
                                project.title,
                                project.desc,
                                project.imgSrc
                              )
                            }
                          >
                            Edit Project
                          </button>
                          {/* Delete button */}
                          <button
                            className="btn btn-error my-8"
                            onClick={() =>
                              this.openDeleteModal(project.projectId)
                            }
                          >
                            Delete Project
                          </button>

                          <DeleteConfirmationModal
                            isOpen={this.state.isDeleteModalOpen}
                            onClose={this.closeDeleteModal}
                            onDelete={() => {
                              this.deleteProject(this.state.deletingProjectId);
                              this.closeDeleteModal();
                            }}
                            targetType={"Project"}
                          />
                        </div>
                      </>
                    ) : null}
                  </>
                }
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectForm;
