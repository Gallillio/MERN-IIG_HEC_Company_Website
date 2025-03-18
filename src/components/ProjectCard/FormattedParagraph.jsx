import React from "react";

const Paragraph = (props) => {
  return (
    <div
      className="subtext-color text-left my-3"
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
};

export default Paragraph;
