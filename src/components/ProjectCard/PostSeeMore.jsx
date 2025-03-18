import React, { useState } from "react";
import ShowMoreText from "react-show-more-text";

const SeeMoreTest = (props) => {
  const [Expanded, setExpanded] = useState(false);

  const executeOnClick = () => {
    setExpanded(!Expanded);
  };

  return (
    <ShowMoreText
      lines={5}
      more="Show more"
      less="Show less"
      className="max-w-2xl mb-6 font-light subtext-color lg:mb-8 md:text-lg lg:text-lg"
      anchorClass="hover:underline cursor-pointer font-semibold"
      onClick={executeOnClick}
      expanded={false}
      width={0}
      truncatedEndingComponent={"... "}
      style={{ cursor: "pointer" }}
    >
      <p
        className="max-w-2xl mb-6 font-light subtext-color lg:mb-8 md:text-lg lg:text-lg"
        dangerouslySetInnerHTML={{ __html: `${props.content}` }}
      />
    </ShowMoreText>
  );
};

export default SeeMoreTest;
