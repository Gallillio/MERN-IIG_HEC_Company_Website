import React from "react";
import Paragraph from "./Paragraph";
import BigTitle from "./BigTitle";
import Subtitle from "./Subtitle";
import Image from "./Image";

const ProjectCard = (props) => {
  let bigTitle = "NEOM Oasis";
  let subtitle1 = "NEOM Oasis Concept: ";
  let p1 =
    "As oasis where serving the people inside the desert to find a place for comfort and refreshing their energy, The NEOM Oasis will be the lungs for the NEOM project, it will not provide only landscape materials, species of trees and shrubs(from nurseries) but it will serve as a boost for, the people minds(culture centers and amphitheater), their mental soul(recreation & meditation areas), their sport(golf areas), emotional(landscape elements lakes, greenery & desert environment).";
  let subtitle2 = "OUSAILA OASIS: ";
  let p2 =
    "It is an arterial OASIS that represents the natural lung for NEOM, The idea of establishing the OASIS was built on the oasis that found in the middle of the desert, Thus, the OUSAILA OASIS is planned to be the most important and largest gathering of central OASIS in NEOM, inside the oasis, there are many services and buildings. OASIS is a sustainable project, it preserve resources as well as depend on its own to produce the required resources to serve the oasis the water sources of the OASIS are treated and used water from the water of purification plants that found inside the OASIS, which means preserving an important resource such as drinking water, the basic idea is to recycle and use the water again, all the water will be treated triple to use it to grow all the existing nurseries, including the recreation areas golf areas. The basis for irrigation of all green areas is the treated water.";

  return (
    // grid layout with 2 columns and 2 rows place image on sides
    <div className="px-20 py-8 ">
      <hr
        className={`h-px mb-12 bg-gray-200 dark:bg-gray-700 border-0 ${props.HrVisibility}`}
      />
      <div
        className={
          props.grid ? "grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8" : ""
        }
      >
        {props.content}
      </div>
    </div>
  );
};

export default ProjectCard;
