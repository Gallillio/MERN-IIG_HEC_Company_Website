import React from "react";

const Info = (props) => {
  return (
    <>
      <div className="p-2 sm:p-2">
        <h3 className="text-lg">{props.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed subtext-color">
          {props.info}
        </p>
      </div>
    </>
  );
};

export default Info;
