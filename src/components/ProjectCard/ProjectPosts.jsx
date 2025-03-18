import React, { Component } from "react";
import "aos/dist/aos.css";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  setDoc,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import Cookies from "js-cookie";

import firebaseConfig from "../../firebaseConfig";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import ProjectInfo from "../ProjectPostComponents/ProjectInfo";
import ProjectPostCard from "../ProjectPostComponents/ProjectPostCard";
import SmallCarousel from "../SmallCarousel";
import BigTitle from "../ProjectCard/BigTitle";
import Paragraph from "../ProjectCard/Paragraph";
import ProjectCard from "../ProjectCard/ProjectCard";
import FormattedParagraph from "../ProjectCard/FormattedParagraph";

class ProjectPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PPId: "",
      projectTitle: "",
      title: "",
      desc: "",
      ProjectBrief: "",
      aimOfProject: "",
      ClientName: "",
      ProjectValue: "",
      ProjectLocation: "",
      ProjectDownloadLink: "",
      imgSrc: null,
      createdAt: Timestamp.fromDate(new Date()),
      PPs: [],
      deletingPostId: null,
      isDeleteModalOpen: false,
      isEditing: false,
      editingPPId: "",
      modalIsOpen: false,
      carouselImages: [],
      postCarouselImages: [],
      isAuthorized: false,
    };
  }

  // TODO group every section in a diffrent collection in firestore
  // for example the first carousel images in one collection
  // the project info in another collection
  // the project posts in another collection

  // TODO add edit button for all components
  // TODO add delete button for normal project posts

  AuthorizeUser() {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Remove loading once user state is retrieved
        await this.setState({ isAuthorized: true });
        console.log("Login successful");
        console.log(user);
        Cookies.set("token", user.accessToken, { expires: 1 / 24 });
      } else {
        this.setState({ isAuthorized: false });
      }
    });

    return () => unsubscribe();
  }

  async componentDidMount() {
    this.getPPs();
    this.getCarouselImages();
    this.getPostCarouselImages();
    this.AuthorizeUser();
  }

  openDeleteModal = (PPID) => {
    this.setState({
      isDeleteModalOpen: true,
      deletingPostId: PPID,
    });
  };

  closeDeleteModal = () => {
    this.setState({
      isDeleteModalOpen: false,
      deletingPostId: null,
    });
  };

  async getPPs() {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const PPCollection = collection(
        firestore,
        `projects/${this.props.PPID}/posts`
      );
      const PPsOrder = query(PPCollection, orderBy("createdAt", "asc"));
      const querySnapshot = await getDocs(PPsOrder);
      const PPs = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const PPId = doc.id;
        console.log("PPId: ", PPId);
        const PPWithId = { PPId, ...data };
        PPs.push(PPWithId);
        // console.log("PPs: ", PPs);
      });

      this.setState({ PPs });
    } catch (error) {
      console.error("Error fetching PPs: ", error);
    }
  }

  async sendPP() {
    const {
      title,
      desc,
      imgSrc,
      ClientName,
      ProjectBrief,
      aimOfProject,
      ProjectValue,
      ProjectLocation,
      ProjectDownloadLink,
      postCarouselImages,
    } = this.state;
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const PPCollection = collection(
        firestore,
        `projects/${this.props.PPID}/posts`
      );
      const formattedDesc = desc.replace(/\n/g, "<br>");
      const formattedProjectBrief = ProjectBrief.replace(/\n/g, "<br>");
      const formattedAimOfProject = aimOfProject.replace(/\n/g, "<br>");

      const PPData = {
        title,
        desc: formattedDesc,
        ClientName,
        ProjectBrief: formattedProjectBrief,
        aimOfProject: formattedAimOfProject,
        ProjectValue,
        ProjectLocation,
        ProjectDownloadLink,
        imgSrc,
        postCarouselImages,
        createdAt: Timestamp.fromDate(new Date()),
      };

      const docRef = await addDoc(PPCollection, PPData);

      this.setState({
        PPId: "",
        title: "",
        desc: "",
        ProjectBrief: "",
        aimOfProject: "",
        ClientName: "",
        ProjectValue: "",
        ProjectLocation: "",
        ProjectDownloadLink: "",
        imgSrc: null,
        postCarouselImages: [],
        createdAt: null,
      });
      this.getPPs();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  async deletePP(PPId, imageSrc) {
    console.log("Deleting PP with ID:", PPId);
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const storage = getStorage(app);

    try {
      const PPRef = doc(firestore, `projects/${this.props.PPID}/posts`, PPId);
      await deleteDoc(PPRef);
      console.log("PP deleted successfully:", PPId);

      console.log("Deleting image with name:", imageSrc);

      if (imageSrc) {
        console.log("Deleting image with name:", imageSrc);
        const imageRef = ref(storage, imageSrc);
        await deleteObject(imageRef);
        console.log("Image deleted successfully:", imageSrc);
      }

      this.getPPs();
    } catch (error) {
      console.error("Error deleting PP and image: ", error);
    }
  }

  async uploadImage(imageFile) {
    try {
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").innerHTML = "Uploading Image...";
      document.getElementById("submit").classList.add("btn-disabled");

      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);
      console.log("Uploading image...");
      console.log("Image file:", imageFile);
      console.log("Image file name:", imageFile.name);
      const storageRef = ref(
        storage,
        `projects/${this.props.PPID}/images/${imageFile.name}`
      );
      await uploadBytes(storageRef, imageFile);

      const downloadURL = await getDownloadURL(storageRef);

      this.setState({ imgSrc: downloadURL });

      console.log("Image uploaded successfully:", downloadURL);

      document.getElementById("submit").disabled = false;
      document.getElementById("submit").innerHTML = "Post";
      document.getElementById("submit").classList.remove("btn-disabled");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  async uploadImages(imageFiles) {
    //upload the multiple images for the carousel
    try {
      // Disable the submit button
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").innerHTML = "Uploading Images...";
      document.getElementById("submit").classList.add("btn-disabled");

      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);
      console.log("Uploading images...");
      console.log("Image files:", imageFiles);

      // Loop through each image file
      for (const imageFile of imageFiles) {
        console.log("Image file name:", imageFile.name);
        const storageRef = ref(
          storage,
          `projects/${this.props.PPID}/images/${imageFile.name}`
        );
        await uploadBytes(storageRef, imageFile);

        const downloadURL = await getDownloadURL(storageRef);

        // Add the image to the carouselImages array
        this.setState((prevState) => ({
          carouselImages: [...prevState.carouselImages, downloadURL],
        }));

        console.log("Image uploaded successfully:", downloadURL);
      }

      // Enable the submit button
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").innerHTML = "Post";
      document.getElementById("submit").classList.remove("btn-disabled");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  async getCarouselImages() {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    try {
      const carouselImagesRef = ref(
        storage,
        `projects/${this.props.PPID}/images`
      );
      const carouselImages = [];

      const carouselImagesList = await listAll(carouselImagesRef);

      carouselImagesList.items.forEach(async (imageRef) => {
        const downloadURL = await getDownloadURL(imageRef);

        // Add the image to the carouselImages array
        this.setState((prevState) => ({
          carouselImages: [...prevState.carouselImages, downloadURL],
        }));
      });
      console.log("Carousel images:", carouselImages);
    } catch (error) {
      console.error("Error getting carousel images:", error);
    }
  }

  async uploadPostCarouselImages(imageFiles) {
    //upload the multiple images for the carousel
    try {
      // Disable the submit button
      document.getElementById("submit").disabled = true;
      document.getElementById("submit").innerHTML = "Uploading Images...";
      document.getElementById("submit").classList.add("btn-disabled");

      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);
      console.log("Uploading images...");
      console.log("Image files:", imageFiles);

      // Loop through each image file
      for (const imageFile of imageFiles) {
        console.log("Image file name:", imageFile.name);
        const storageRef = ref(
          storage,
          `projects/${this.props.PPID}/PostCarouselImages/${imageFile.name}`
        );
        await uploadBytes(storageRef, imageFile);

        const downloadURL = await getDownloadURL(storageRef);

        // Add the image to the carouselImages array
        this.setState((prevState) => ({
          postCarouselImages: [...prevState.postCarouselImages, downloadURL],
        }));

        console.log("Image uploaded successfully:", downloadURL);
      }

      // Enable the submit button
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").innerHTML = "Post";
      document.getElementById("submit").classList.remove("btn-disabled");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  async updateProjectInfo() {
    const {
      ProjectBrief,
      aimOfProject,
      ClientName,
      ProjectValue,
      ProjectLocation,
      ProjectDownloadLink,
    } = this.state;
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      //update the project info without creating a new document in the database

      const PPDocument = doc(
        firestore,
        `projects/${this.props.PPID}/ProjectInfo`
      );

      const PPData = {
        ProjectBrief,
        aimOfProject,
        ClientName,
        ProjectValue,
        ProjectLocation,
        ProjectDownloadLink,
      };

      // update the project info
      const docRef = await setDoc(PPDocument, PPData);
      console.log("Project info updated successfully");

      this.setState({
        PPId: "",
        title: "",
        desc: "",
        ProjectBrief: "",
        aimOfProject: "",
        ClientName: "",
        ProjectValue: "",
        ProjectLocation: "",
        ProjectDownloadLink: "",
        imgSrc: null,
        postCarouselImages: [],
        createdAt: null,
      });
      this.getPPs();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  // Function to enter edit mode for a specific project post
  enterEditMode = (PPId) => {
    this.setState({
      isEditing: true,
      editingPPId: PPId,
    });
  };

  // Function to exit edit mode for a specific project post
  exitEditMode = () => {
    this.setState({
      isEditing: false,
      editingPPId: "",
    });
  };

  async getPostCarouselImages() {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    try {
      const carouselImagesRef = ref(
        storage,
        `projects/${this.props.PPID}/PostCarouselImages`
      );
      const carouselImages = [];

      const carouselImagesList = await listAll(carouselImagesRef);

      carouselImagesList.items.forEach(async (imageRef) => {
        const downloadURL = await getDownloadURL(imageRef);

        // Add the image to the carouselImages array
        this.setState((prevState) => ({
          postCarouselImages: [...prevState.postCarouselImages, downloadURL],
        }));
      });
      console.log("Carousel images:", carouselImages);
    } catch (error) {
      console.error("Error getting carousel images:", error);
    }
  }

  render() {
    const {
      title,
      desc,
      imgSrc,
      postCarouselImages,
      PPs,
      isEditing,
      editingPPId,
      modalIsOpen,
      ProjectBrief,
      aimOfProject,
      ClientName,
      ProjectValue,
      ProjectLocation,
      ProjectDownloadLink,
      carouselImages,
    } = this.state;

    return (
      <div>
        {!isEditing && this.state.isAuthorized ? (
          <div className="container x-auto mt-8 py-14 px-8">
            {/* Carousel upload */}
            {PPs.length === 0 && (
              <div class="my-4">
                <h1 className="block mb-2 text-lg font-medium text-base-content">
                  Please upload project images for the slideshow
                </h1>

                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-base-content"
                    htmlFor="multiple_files"
                  >
                    Upload Project Images
                  </label>
                  <input
                    type="file"
                    multiple
                    className="file-input file-input-bordered file-input-primary w-full"
                    id="multiple_files"
                    onChange={(e) => {
                      // Call the uploadImage function when a file is selected
                      const files = e.target.files;
                      if (files) {
                        this.uploadImages(files);
                      }
                    }}
                  />
                </div>
              </div>
            )}
            {/* Project brief upload */}
            {PPs.length === 1 && (
              <div class="my-4 mx-4 space-y-4">
                <h1 className="block mb-2 text-lg font-medium text-base-content">
                  Please enter project information
                </h1>
                <div class="my-2 space-y-8">
                  <div>
                    <label
                      for="Title"
                      class="block mb-2 text-sm font-medium text-base-content"
                    >
                      Project brief
                    </label>
                    <textarea
                      type="text"
                      className="textarea textarea-primary w-full max-w-2xl h-52"
                      placeholder="Enter project brief"
                      value={ProjectBrief.replace(/\\n/g, "\n")}
                      onChange={(e) =>
                        this.setState({ ProjectBrief: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      for="Title"
                      class="block mb-2 text-sm font-medium text-base-content"
                    >
                      Aim of project
                    </label>
                    <textarea
                      type="text"
                      className="textarea textarea-primary w-full max-w-2xl h-52"
                      placeholder="Enter aim of project"
                      value={aimOfProject.replace(/\\n/g, "\n")}
                      onChange={(e) =>
                        this.setState({ aimOfProject: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      for="Title"
                      class="block mb-2 text-sm font-medium text-base-content"
                    >
                      Client Name
                    </label>
                    <input
                      type="text"
                      class="input input-bordered input-primary w-full max-w-xs"
                      placeholder="Enter client name"
                      value={ClientName}
                      onChange={(e) =>
                        this.setState({ ClientName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      for="Title"
                      class="block mb-2 text-sm font-medium text-base-content"
                    >
                      Project Value
                    </label>
                    <input
                      type="text"
                      class="input input-bordered input-primary w-full max-w-xs"
                      placeholder="Enter project value"
                      value={ProjectValue}
                      onChange={(e) =>
                        this.setState({ ProjectValue: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      for="Title"
                      class="block mb-2 text-sm font-medium text-base-content"
                    >
                      Project Location
                    </label>
                    <input
                      type="text"
                      class="input input-bordered input-primary w-full max-w-xs"
                      placeholder="Enter project location"
                      value={ProjectLocation}
                      onChange={(e) =>
                        this.setState({ ProjectLocation: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      for="Title"
                      class="block mb-2 text-sm font-medium text-base-content"
                    >
                      Project sheet download link
                    </label>
                    <input
                      type="text"
                      class="input input-bordered input-primary w-full max-w-xs"
                      placeholder="Enter download link"
                      value={ProjectDownloadLink}
                      onChange={(e) =>
                        this.setState({ ProjectDownloadLink: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {/* Project posts upload */}
            {PPs.length > 1 && (
              <div class="my-4">
                <h1 className="block mb-2 text-lg font-medium text-base-content">
                  Post a project card
                </h1>
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
                  value={desc.replace(/\\n/g, "\n")}
                  onChange={(e) => this.setState({ desc: e.target.value })}
                ></textarea>
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
                    id="multiple_files"
                    multiple
                    onChange={(e) => {
                      // Call the uploadImage function when a file is selected
                      const file = e.target.files;
                      console.log("File:", file);
                      console.log("File length:", file.length);
                      if (file.length == 1) {
                        this.uploadImage(file[0]);
                      } else if (file.length > 1) {
                        this.uploadPostCarouselImages(file);
                      } else {
                        console.log("No file selected");
                      }
                    }}
                  />
                  {/* Display the current image(s) */}
                  {imgSrc && (
                    <div className="mt-4">
                      <img
                        src={imgSrc}
                        className="w-1/2 h-auto rounded-lg my-6 bg-[#171212]"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            <button
              id="submit"
              type="button"
              class="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
              onClick={() => {
                //upload the PP
                this.sendPP();

                //clear file input field
                document.getElementById("multiple_files").value = "";
              }}
            >
              Post
            </button>
          </div>
        ) : null}

        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mx-auto">
            {this.props.ProjectTitle}
          </h2>
        </div>
        <div>
          <ul className="max-w-full">
            {PPs.map((PP, index) => (
              <div key={index}>
                {
                  <>
                    {index === 0 && (
                      <div>
                        {/* display images of carousel */}
                        <SmallCarousel
                          images={carouselImages}
                          effect="pagination"
                        />
                      </div>
                    )}
                    {index === 1 && (
                      <>
                        <ProjectInfo
                          brief={PP.ProjectBrief}
                          aim={PP.aimOfProject}
                          client={PP.ClientName}
                          value={PP.ProjectValue}
                          location={PP.ProjectLocation}
                          DownloadLink={PP.ProjectDownloadLink}
                        />

                        {/* Edit form to edit Project Info */}
                        {this.state.isAuthorized &&
                          isEditing &&
                          editingPPId === PP.PPId && (
                            <div class="my-4 mx-4 space-y-4">
                              <div>
                                <label className="block mb-2 text-sm font-medium text-base-content">
                                  Project brief
                                </label>
                                <textarea
                                  type="text"
                                  className="textarea textarea-primary w-full max-w-2xl h-52"
                                  placeholder="Enter project brief"
                                  value={ProjectBrief.replace(/\\n/g, "\n")}
                                  onChange={(e) =>
                                    this.setState({
                                      ProjectBrief: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div>
                                <label className="block mb-2 text-sm font-medium text-base-content">
                                  Aim of project
                                </label>
                                <textarea
                                  type="text"
                                  className="textarea textarea-primary w-full max-w-2xl h-52"
                                  placeholder="Enter aim of project"
                                  value={aimOfProject.replace(/\\n/g, "\n")}
                                  onChange={(e) =>
                                    this.setState({
                                      aimOfProject: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div>
                                <label className="block mb-2 text-sm font-medium text-base-content">
                                  Client Name
                                </label>
                                <input
                                  type="text"
                                  className="input input-bordered input-primary w-full max-w-xs"
                                  placeholder="Enter client name"
                                  value={ClientName}
                                  onChange={(e) =>
                                    this.setState({
                                      ClientName: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div>
                                <label className="block mb-2 text-sm font-medium text-base-content">
                                  Project Value
                                </label>
                                <input
                                  type="text"
                                  className="input input-bordered input-primary w-full max-w-xs"
                                  placeholder="Enter project value"
                                  value={ProjectValue}
                                  onChange={(e) =>
                                    this.setState({
                                      ProjectValue: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div>
                                <label className="block mb-2 text-sm font-medium text-base-content">
                                  Project Location
                                </label>
                                <input
                                  type="text"
                                  className="input input-bordered input-primary w-full max-w-xs"
                                  placeholder="Enter project location"
                                  value={ProjectLocation}
                                  onChange={(e) =>
                                    this.setState({
                                      ProjectLocation: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <label className="block mb-2 text-sm font-medium text-base-content">
                                Project sheet download link
                              </label>
                              <input
                                type="text"
                                className="input input-bordered input-primary w-full max-w-xs"
                                placeholder="Enter download link"
                                value={ProjectDownloadLink}
                                onChange={(e) =>
                                  this.setState({
                                    ProjectDownloadLink: e.target.value,
                                  })
                                }
                              />
                              <div className="flex justify-center x-auto mt-8 space-x-4">
                                <button
                                  className="btn btn-primary my-8"
                                  onClick={() => {
                                    this.setState({ isEditing: false });
                                    this.updateProjectInfo();
                                  }}
                                >
                                  Update
                                </button>

                                <button
                                  className="btn btn-error my-8"
                                  onClick={() =>
                                    this.setState({ isEditing: false })
                                  }
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}

                        {/* Edit Button */}
                        {this.state.isAuthorized && (
                          <>
                            <div className="flex justify-center x-auto mt-8 space-x-4">
                              <button
                                className="btn btn-primary my-8"
                                onClick={() =>
                                  this.setState({
                                    isEditing: true,
                                    editingPPId: PP.PPId,
                                    ProjectBrief: PP.ProjectBrief,
                                    aimOfProject: PP.aimOfProject,
                                    ClientName: PP.ClientName,
                                    ProjectValue: PP.ProjectValue,
                                    ProjectLocation: PP.ProjectLocation,
                                    ProjectDownloadLink: PP.ProjectDownloadLink,
                                  })
                                }
                              >
                                Edit
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {(index > 1 && PP.imgSrc && (
                      <ProjectPostCard
                        title={PP.title}
                        body={<FormattedParagraph content={PP.desc} />}
                        image={PP.imgSrc}
                        postion={index % 2}
                      />
                    )) ||
                      (index > 1 && !PP.imgSrc && (
                        <div>
                          <ProjectCard
                            grid={false}
                            content={
                              <>
                                <div
                                  data-aos="fade-up"
                                  data-aos-duration="1500"
                                  data-aos-offset="150"
                                >
                                  <BigTitle content={PP.title} />
                                  <FormattedParagraph content={PP.desc} />
                                  <SmallCarousel
                                    images={PP.postCarouselImages}
                                    effect="pagination"
                                  />
                                </div>
                              </>
                            }
                          />

                          {/* edit form */}

                          {/* delete and edit post button */}
                          {this.state.isAuthorized && (
                            <>
                              <div className="flex justify-center x-auto mt-8 space-x-4">
                                <button
                                  className="btn btn-primary my-8"
                                  onClick={() =>
                                    this.setState({
                                      isEditing: true,
                                      editingPPId: PP.PPId,
                                      title: PP.title,
                                      desc: PP.desc,
                                      postCarouselImages: PP.postCarouselImages,
                                    })
                                  }
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-error my-8"
                                  onClick={() => this.openDeleteModal(PP.PPId)}
                                >
                                  Delete
                                </button>
                              </div>

                              <DeleteConfirmationModal
                                isOpen={this.state.isDeleteModalOpen}
                                closeModal={this.closeDeleteModal}
                                delete={() =>
                                  this.deletePP(
                                    this.state.deletingPostId,
                                    PP.postCarouselImages
                                  )
                                }
                              />
                            </>
                          )}
                        </div>
                      ))}
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

export default ProjectPosts;
