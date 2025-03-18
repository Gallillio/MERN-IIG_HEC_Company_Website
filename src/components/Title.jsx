import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Title = (props) => {
  //test
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="justify-center self-center">
      <h1 className="text-7xl font-bold">{props.title}</h1>
    </div>
  );
};

export default Title;
