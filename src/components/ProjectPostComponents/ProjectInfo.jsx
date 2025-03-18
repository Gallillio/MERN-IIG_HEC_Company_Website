import React, { useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import BigTitle from "../ProjectCard/BigTitle";
import Subtitle from "../ProjectCard/Subtitle";
import Paragraph from "../ProjectCard/Paragraph";
import FormattedParagraph from "../ProjectCard/FormattedParagraph";
import Info from "../Info";
import AOS from "aos";
import "aos/dist/aos.css";

// props: client, value, location, DownloadLink, brief

const ProjectInfo = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ProjectCard
      grid={true}
      HrVisibility="hidden"
      content={
        <>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="lg:col-span-2"
          >
            <BigTitle content="Project information" />
            <Subtitle content="Brief" />
            <FormattedParagraph content={props.brief} />
            <Subtitle content="Aim of Project" />
            <FormattedParagraph content={props.aim} />
          </div>
          <div className="pt-16">
            {props.client && <Info title="Client" info={props.client} />}
            {props.value && <Info title="Value" info={props.value} />}
            {props.location && <Info title="Location" info={props.location} />}
            {props.DownloadLink && (
              <Info
                title="Project"
                info={
                  <a
                    href={props.DownloadLink}
                    className="text-md hover:underline"
                  >
                    Download Sheet
                  </a>
                }
              />
            )}
          </div>
        </>
      }
    />
  );
};

export default ProjectInfo;
