import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogForm from "../../components/BlogForm";
import ProjectForm from "../../components/ProjectForm";

const Test = () => {
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <ProjectForm />
    </div>
  );
};

export default Test;
