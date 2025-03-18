import React from "react";
import GeneralBanner from "../GeneralBanner";
import ProjectCard from "../ProjectCard/ProjectCard";

//props title, body, pos, image

const ProjectPostCard = (props) => {
  return (
    <>
      <div>
        <ProjectCard
          grid={false}
          content={
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="150"
            >
              <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                      className={`relative h-64 overflow-hidden rounded-lg sm:h-80 my-auto ${
                        props.postion ? "lg:order-last" : "lg:order-first"
                      }`} // Change lg:order-last to lg:order-first
                    >
                      <img
                        src={props.image}
                        className={`absolute inset-0 h-full w-full object-cover ${props.ImagePref}`}
                      />
                    </div>

                    <div className="lg:py-24">
                      <h2 className="text-3xl font-bold sm:text-4xl text-left">
                        {props.title}
                      </h2>{" "}
                      <p className="mt-4 subtext-color text-left">
                        {" "}
                        {<p>{props.body}</p>}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          }
        />
      </div>
    </>
  );
};

export default ProjectPostCard;
