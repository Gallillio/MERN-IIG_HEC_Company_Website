import React from "react";

const Image = (props) => {
  return (
    <div>
      <div className="h-auto rounded-lg shadow-lg dark:shadow-gray-800 my-3 ">
        <img src={props.content} />
      </div>
      {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 p-8">
                <img src={OasisMap1} />
                <img src={OasisMap2} />
                <img src={OasisMap3} />
                <img src={OasisMap4} />
            </div> */}
    </div>
  );
};

export default Image;
