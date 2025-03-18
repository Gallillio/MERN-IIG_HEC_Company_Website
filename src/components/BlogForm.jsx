import React, { Component } from "react";
import "aos/dist/aos.css";
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
  query,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  setDoc,
  doc,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import ArticlePost from "./BlogPosts/ArticlePost";
import VideoPost from "./BlogPosts/VideoPost";
import ArticlePostImage from "./BlogPosts/ArticlePostImage";
import Cookies from "js-cookie";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: "",
      title: "",
      body: "",
      style: "",
      videoLink: "",
      imgSrc: null, // Store the selected image files
      createdAt: Timestamp.fromDate(new Date()),
      posts: [], // To store the list of posts
      isDeleteModalOpen: false,
      deletingPostId: null,
      isEditing: false, // Track if editing mode is active
      editedPostId: null, // Store the ID of the post being edited
      isAuthorized: false,
    };
  }

  openDeleteModal = (postId) => {
    this.setState({
      isDeleteModalOpen: true,
      deletingPostId: postId,
    });
  };

  closeDeleteModal = () => {
    this.setState({
      isDeleteModalOpen: false,
      deletingPostId: null,
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
    this.getPosts();
    this.AuthorizeUser();
  }

  async getPosts() {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const postsCollection = collection(firestore, "posts");
      const postsOrder = query(postsCollection, orderBy("createdAt", "desc")); // Define the query and order by 'createdAt' in descending order
      const querySnapshot = await getDocs(postsOrder);
      const posts = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const postId = doc.id; // Get the document ID
        const postWithId = { postId, ...data }; // Include the ID in the post data
        posts.push(postWithId);
      });

      this.setState({ posts });
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  }

  async sendPost() {
    const { title, body, style, videoLink, imgSrc } = this.state;
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const formattedBody = body.replace(/\n/g, "<br>");

    try {
      const postsCollection = collection(firestore, "posts");
      const postData = {
        title,
        body: formattedBody,
        style,
        videoLink,
        imgSrc, // Include the selected image files
        createdAt: Timestamp.fromDate(new Date()),
      };
      const docRef = await addDoc(postsCollection, postData);
      console.log("Document written with ID: ", docRef.id);

      //set the state of the post id
      this.setState({ postId: docRef.id });

      // Clear input fields
      this.setState({
        title: "",
        body: "",
        style: "",
        videoLink: "",
        imgSrc: null,
        createdAt: null, // Clear the selected image files
      });

      // Fetch and update the list of posts after adding a new post
      this.getPosts();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  async getPostWithId(postId) {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      // Reference a specific document in the "posts" collection using its ID
      const postRef = collection(firestore, "posts", postId);

      // Get the document data
      const docSnapshot = await getDoc(postRef);

      if (docSnapshot.exists()) {
        const postData = docSnapshot.data();
        console.log("Post data with ID ", postId, ": ", postData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  }

  async deletePost(postId) {
    console.log("Deleting post with ID:", postId);
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const storage = getStorage(app);

    try {
      // Delete the post document
      const postRef = doc(firestore, "posts", postId);

      // Get the img src of the post
      const docSnapshot = await getDoc(postRef);
      const postData = docSnapshot.data();
      const imageSrc = postData.imgSrc;

      console.log("Current image:", imageSrc);

      // If there is an associated image, delete it from storage
      if (imageSrc) {
        console.log("Deleting image with name:", imageSrc);
        const imageRef = ref(storage, imageSrc);
        await deleteObject(imageRef);
        console.log("Image deleted successfully:", imageSrc);
      }

      //delete the post document
      await deleteDoc(postRef);
      console.log("Post deleted successfully:", postId);

      // Fetch and update the list of posts after deleting a post
      this.getPosts();
    } catch (error) {
      console.error("Error deleting post and image: ", error);
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

  // Handle the update of the edited post
  updatePost = async () => {
    const { title, body, imgSrc, videoLink, editedPostId } = this.state;
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const postRef = doc(firestore, "posts", editedPostId);
      const postData = {
        title,
        body,
        imgSrc,
        videoLink,
      };
      await setDoc(postRef, postData, { merge: true }); // Use setDoc to update without overwriting
      console.log("Post updated successfully:", editedPostId);

      this.toggleEdit(this.state.postId); // Exit edit mode after updating

      // Clear input fields
      this.setState({
        title: "",
        body: "",
        style: "",
        videoLink: "",
        imgSrc: null,
        createdAt: null, // Clear the selected image files
      });

      // Fetch and update the list of post after editing
      this.getPosts();
    } catch (error) {
      console.error("Error updating project: ", error);
    }
  };

  // Cancel editing mode
  cancelEdit = () => {
    this.setState({
      isEditing: false,
      editedPostId: null,
      editedTitle: "",
      editedBody: "",
      editedVideoLink: "",
      editedImageSrc: null,
      // Reset other edited fields
    });
  };

  // Toggle editing mode
  toggleEdit = (postId) => {
    this.setState({
      isEditing: !this.state.isEditing,
      editedPostId: postId,
    });
  };

  render() {
    const { title, body, style, videoLink, posts } = this.state;

    return (
      <div>
        {!this.state.isEditing && this.state.isAuthorized ? (
          <div className="container mx-auto mt-8">
            <div className="my-4">
              <h1 className="block mb-2 text-lg font-medium text-base-content">
                Post a Blog Post
              </h1>
            </div>

            <label
              htmlFor="style"
              className="block mb-2 text-sm font-medium text-base-content"
            >
              Select a format
            </label>
            <select
              id="style"
              className="select select-primary w-full"
              value={style}
              onChange={(e) => this.setState({ style: e.target.value })}
            >
              <option disabled="true" value="">
                Select a format
              </option>
              <option value="Post">Post</option>
              <option value="ImagePost">Post with image</option>
              <option value="VideoPost">Video</option>
            </select>

            <div className="my-2">
              <label
                for="Title"
                className="block mb-2 text-sm font-medium text-base-content"
              >
                Title
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs"
                placeholder="Title"
                value={title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>

            <div className="my-2">
              <label
                for="Body"
                className="block mb-2 text-sm font-medium text-base-content"
              >
                Body
              </label>
              <textarea
                type="text"
                placeholder="Body"
                className="textarea textarea-primary w-full max-w-2xl h-52"
                value={body.replace(/\\n/g, "\n")}
                onChange={(e) => this.setState({ body: e.target.value })}
              ></textarea>
            </div>

            {/* Conditional rendering for Video Link input */}
            {style === "VideoPost" && (
              <div className="my-2">
                <label
                  for="Title"
                  className="block mb-2 text-sm font-medium text-base-content"
                >
                  Video ID
                </label>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs"
                  placeholder="Video ID"
                  value={videoLink}
                  onChange={(e) => this.setState({ videoLink: e.target.value })}
                />

                <img
                  loading="lazy"
                  className="my-3 rounded-lg w-1/2"
                  alt="how to get video id"
                  src="https://camo.githubusercontent.com/78e1ba6715553b6712b68ebbb3f520ddfa0b5e7c24801dd9901a5c3ba1d8211f/687474703a2f2f692e696d6775722e636f6d2f4f6c776b3463722e706e67"
                />
              </div>
            )}

            {/* Conditional rendering for imgSrc input */}
            {style === "ImagePost" && (
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
                  onChange={(e) => {
                    // Call the uploadImage function when a file is selected
                    const file = e.target.files[0];
                    if (file) {
                      this.uploadImage(file);
                    }
                  }}
                />
                {/* Display the current image */}
                {this.state.imgSrc && (
                  <img
                    src={this.state.imgSrc}
                    alt="Current"
                    className="my-3 rounded-lg w-1/2"
                  />
                )}
              </div>
            )}

            <button
              id="submit"
              type="button"
              disabled={style === "" ? true : false}
              className="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
              onClick={() => this.sendPost()}
            >
              Post
            </button>
          </div>
        ) : null}

        <div className="container mx-auto mt-4 space-y-10">
          {posts.map((post, index) => (
            <div key={index}>
              {post.style === "Post" && (
                <>
                  {/* Edit Form */}
                  {this.state.isEditing &&
                  this.state.editedPostId === post.postId ? (
                    <div className="container x-auto mt-8">
                      <div className="my-4">
                        <h1 className="block mb-2 text-lg font-medium text-base-content">
                          Edit Post
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
                          defaultValue={post.title}
                          onChange={(e) =>
                            this.setState({ editedTitle: e.target.value })
                          }
                        />
                      </div>

                      <div className="my-2">
                        <label
                          htmlFor="Body"
                          className="block mb-2 text-sm font-medium text-base-content"
                        >
                          Body
                        </label>
                        <textarea
                          className="textarea textarea-primary w-full max-w-2xl h-52"
                          defaultValue={post.body}
                          value={body.replace(/\\n/g, "\n")}
                          onChange={(e) =>
                            this.setState({ editedBody: e.target.value })
                          }
                        ></textarea>
                      </div>

                      <div className="container x-auto my-8 space-x-4">
                        <button
                          className="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
                          onClick={() => this.updatePost(post)}
                        >
                          Update
                        </button>
                        <button
                          className="focus:outline-none btn btn-error w-full max-w-xs mx-auto mt-4"
                          onClick={() => this.cancelEdit()}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    //Render the post
                    <ArticlePost
                      id={post.id}
                      title={post.title}
                      body={post.body}
                      pos={index % 2}
                    />
                  )}

                  {this.state.isAuthorized ? (
                    <>
                      <p>post id: {post.postId}</p>

                      <div className="container x-auto mt-8 space-x-4">
                        {/* Render Edit button */}
                        <button
                          className="btn btn-primary my-8"
                          onClick={() => this.toggleEdit(post.postId)}
                        >
                          Edit
                        </button>

                        {/* Delete button */}
                        <button
                          className="btn btn-error my-8"
                          onClick={() => this.openDeleteModal(post.postId)}
                        >
                          Delete Post
                        </button>
                      </div>

                      <DeleteConfirmationModal
                        isOpen={this.state.isDeleteModalOpen}
                        onClose={this.closeDeleteModal}
                        onDelete={() => {
                          this.deletePost(
                            this.state.deletingPostId,
                            post.imgSrc
                          );
                          this.closeDeleteModal();
                        }}
                        targetType={"Post"}
                      />
                    </>
                  ) : null}
                  <hr />
                </>
              )}
              {post.style === "ImagePost" && (
                <>
                  {/* Edit Form */}
                  {this.state.isEditing &&
                  this.state.editedPostId === post.postId ? (
                    <div className="container x-auto mt-8">
                      <div className="my-4">
                        <h1 className="block mb-2 text-lg font-medium text-base-content">
                          Edit Post
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
                          defaultValue={post.title}
                          onChange={(e) =>
                            this.setState({ title: e.target.value })
                          }
                        />
                      </div>

                      <div className="my-2">
                        <label
                          htmlFor="Body"
                          className="block mb-2 text-sm font-medium text-base-content"
                        >
                          Body
                        </label>
                        <textarea
                          className="textarea textarea-primary w-full max-w-2xl h-52"
                          defaultValue={post.body}
                          value={body.replace(/\\n/g, "\n")}
                          onChange={(e) =>
                            this.setState({ body: e.target.value })
                          }
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
                          id="multiple_files"
                          onChange={(e) => {
                            // Call the uploadImage function when a file is selected
                            const file = e.target.files[0];
                            console.log(file);
                            if (file) {
                              this.uploadImage(file);
                            }
                          }}
                        />
                      </div>

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

                      <div className="container x-auto my-8 space-x-4">
                        <button
                          id="update"
                          className="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
                          onClick={() => this.updatePost(post)}
                        >
                          Update
                        </button>
                        <button
                          className="focus:outline-none btn btn-error w-full max-w-xs mx-auto mt-4"
                          onClick={() => this.cancelEdit()}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <ArticlePostImage
                      id={post.id}
                      title={post.title}
                      body={post.body}
                      image={post.imgSrc}
                      pos={index % 2}
                    />
                  )}
                  {this.state.isAuthorized ? (
                    <>
                      <p>post id: {post.postId}</p>

                      <div className="container x-auto mt-8 space-x-4">
                        {/* Render Edit button */}
                        <button
                          className="btn btn-primary my-8"
                          onClick={() => this.toggleEdit(post.postId)}
                        >
                          Edit
                        </button>

                        {/* Delete button */}
                        <button
                          className="btn btn-error my-8"
                          onClick={() => this.openDeleteModal(post.postId)}
                        >
                          Delete Post
                        </button>
                      </div>

                      <DeleteConfirmationModal
                        isOpen={this.state.isDeleteModalOpen}
                        onClose={this.closeDeleteModal}
                        onDelete={() => {
                          this.deletePost(
                            this.state.deletingPostId,
                            post.imgSrc
                          );
                          this.closeDeleteModal();
                        }}
                        targetType={"Post"}
                      />
                    </>
                  ) : null}
                  <hr />
                </>
              )}
              {post.style === "VideoPost" && (
                <>
                  {/* Edit Form */}
                  {this.state.isEditing &&
                  this.state.editedPostId === post.postId ? (
                    <div className="container x-auto mt-8">
                      <div className="my-4">
                        <h1 className="block mb-2 text-lg font-medium text-base-content">
                          Edit Post
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
                          defaultValue={post.title}
                          onChange={(e) =>
                            this.setState({ title: e.target.value })
                          }
                        />
                      </div>

                      <div className="my-2">
                        <label
                          htmlFor="Body"
                          className="block mb-2 text-sm font-medium text-base-content"
                        >
                          Body
                        </label>
                        <textarea
                          className="textarea textarea-primary w-full max-w-2xl h-52"
                          defaultValue={post.body}
                          value={body.replace(/\\n/g, "\n")}
                          onChange={(e) =>
                            this.setState({ body: e.target.value })
                          }
                        ></textarea>
                      </div>

                      <div className="my-2">
                        <label
                          htmlFor="Title"
                          className="block mb-2 text-sm font-medium text-base-content"
                        >
                          Video ID
                        </label>
                        <input
                          type="text"
                          className="input input-bordered input-primary w-full max-w-xs"
                          placeholder="Video ID"
                          defaultValue={post.videoLink}
                          onChange={(e) =>
                            this.setState({ videoLink: e.target.value })
                          }
                        />
                      </div>

                      <div className="container x-auto my-8 space-x-4">
                        <button
                          className="focus:outline-none btn btn-primary w-full max-w-xs mx-auto mt-4"
                          onClick={() => this.updatePost(post)}
                        >
                          Update
                        </button>
                        <button
                          className="focus:outline-none btn btn-error w-full max-w-xs mx-auto mt-4"
                          onClick={() => this.cancelEdit()}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <VideoPost
                      id={post.id}
                      title={post.title}
                      body={post.body}
                      videoId={post.videoLink}
                      pos={index % 2}
                    />
                  )}
                  {this.state.isAuthorized ? (
                    <>
                      <p>post id: {post.postId}</p>

                      <div className="container x-auto mt-8 space-x-4">
                        {/* Render Edit button */}
                        <button
                          className="btn btn-primary my-8"
                          onClick={() => this.toggleEdit(post.postId)}
                        >
                          Edit Post
                        </button>

                        {/* Delete button */}
                        <button
                          className="btn btn-error my-8"
                          onClick={() => this.openDeleteModal(post.postId)}
                        >
                          Delete Post
                        </button>
                      </div>

                      <DeleteConfirmationModal
                        isOpen={this.state.isDeleteModalOpen}
                        onClose={this.closeDeleteModal}
                        onDelete={() => {
                          this.deletePost(
                            this.state.deletingPostId,
                            post.imgSrc
                          );
                          this.closeDeleteModal();
                        }}
                        targetType={"Post"}
                      />
                    </>
                  ) : null}
                  <hr />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogForm;
