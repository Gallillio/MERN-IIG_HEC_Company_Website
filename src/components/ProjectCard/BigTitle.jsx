import React from "react";

const BigTitle = (props) => {
  return (
    <h2 className="my-6 text-3xl font-bold sm:text-4xl text-left">
      {props.content}
    </h2>
  );
};

export default BigTitle;
