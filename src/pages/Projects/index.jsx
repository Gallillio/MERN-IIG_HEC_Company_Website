import React, { useEffect } from "react";
import Timeline from "../../components/Timeline";
import AOS from "aos";
import "aos/dist/aos.css";
import GeneralBanner from "../../components/GeneralBanner";
import Title from "../../components/Title";
import ProjectForm from "../../components/ProjectForm";

const Projects = () => {
  //test
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col">
      <Title title={"Projects"} />

      {/* List of Project banners */}
      <div className="flex flex-col py-14 px-8">
        <ProjectForm />
      </div>
      <Timeline />
    </div>
  );
};

export default Projects;
