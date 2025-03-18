import React from "react";

const ProjectBanner = (props) => {
  return (
    <li
      data-aos={props.pos == 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1500"
      className="flex-grow border border-base-content my-10 shadow-xl rounded-lg hover:border-accent"
    >
      <a href={`Projects/${props.id}`}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full ${
                props.pos == 0
                  ? "lg:order-last hover:scale-105 duration-300"
                  : "lg:order-first hover:scale-105 duration-300"
              }`} // Change lg:order-last to lg:order-first
            >
              <img
                src={props.Image}
                className={`absolute inset-0 h-full w-full object-cover ${props.ImageSrc}`}
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-left">
                {props.title}
              </h2>{" "}
              <p className="mt-4 subtext-color text-left"> {props.desc}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProjectBanner;
