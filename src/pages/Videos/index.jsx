import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../components/Title";
import GeneralBanner from "../../components/GeneralBanner";

const Videos = () => {
  //test
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex flex-col">
      <Title title={"Our Videos"} />

      <GeneralBanner
        positionOfBanner={"lg:order-first"}
        Title={"Our Vision"}
        Content={
          "To provide inspired green solution for those who seek innovation and creativity in the Landscape field and aims at making a better quality of life for present and future generations."
        }
        ImagePref={"hidden"}
        videoId={"L1ny9LgjRDA"}
      />

      <GeneralBanner
        positionOfBanner={"lg:order-last"}
        Title={"Our Vision"}
        Content={
          "To provide inspired green solution for those who seek innovation and creativity in the Landscape field and aims at making a better quality of life for present and future generations."
        }
        ImagePref={"hidden"}
        videoId={"L1ny9LgjRDA"}
      />

      <GeneralBanner
        positionOfBanner={"lg:order-first"}
        Title={"Our Vision"}
        Content={
          "To provide inspired green solution for those who seek innovation and creativity in the Landscape field and aims at making a better quality of life for present and future generations."
        }
        ImagePref={"hidden"}
        videoId={"L1ny9LgjRDA"}
      />

      <GeneralBanner
        positionOfBanner={"lg:order-last"}
        Title={"Our Vision"}
        Content={
          "To provide inspired green solution for those who seek innovation and creativity in the Landscape field and aims at making a better quality of life for present and future generations."
        }
        ImagePref={"hidden"}
        videoId={"L1ny9LgjRDA"}
      />
    </div>
  );
};

export default Videos;
