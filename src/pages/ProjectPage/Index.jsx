import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { useParams } from "react-router-dom";
import ProjectPosts from "../../components/ProjectCard/ProjectPosts";

// get the project id from the url
// fetch the project data from the database
// display the project data
const Project = () => {
  const [projectData, setProjectData] = useState({
    projectId: "",
    title: "",
    desc: "",
    imgSrc: null,
    createdAt: null,
  });

  const { projectId } = useParams();

  async function fetchProjectData() {
    // Initialize Firebase app and Firestore client
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    try {
      // Reference a specific document in the "posts" collection using its ID
      const projectRef = doc(firestore, "projects", projectId);

      // Get the document data
      const docSnapshot = await getDoc(projectRef);

      if (docSnapshot.exists()) {
        // Set the state
        setProjectData(docSnapshot.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  }

  useEffect(() => {
    fetchProjectData(); // Fetch project data when the component mounts
  }, [projectId]);

  return (
    <div className="flex flex-col">
      <ProjectPosts PPID={projectId} ProjectTitle={projectData.title} />
    </div>
  );
};

export default Project;
