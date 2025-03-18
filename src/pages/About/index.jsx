import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "../../components/AboutUs";
import Values from "../../components/Values";
import GeneralBanner from "../../components/GeneralBanner";

const Aboutv2 = () => {
  //test
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
      <AboutUs />
      <div data-aos="fade-right" data-aos-duration="1500">
        <GeneralBanner
          positionOfBanner={"lg:order-first"}
          Image={"https://media.istockphoto.com/id/1063723682/photo/hand-sketching-a-designer-villa-with-pool.jpg?s=612x612&w=0&k=20&c=SlIacvwSEEsZ-2imWLDk6dC0glhaWEg-pOGFSK4YQuI="}
          Title={"Our Vision"}
          Content={"To provide inspired green solution for those who seek innovation and creativity in the Landscape field and aims at making a better quality of life for present and future generations."}
        />
      </div>
      <div data-aos="fade-left" data-aos-duration="1500">
        <GeneralBanner
          positionOfBanner={"lg:order-last"}
          Image={"https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          Title={"Our Mission"}
          Content={"Exceeding clients’ expectations providing both innovation and practicality all the time in all our solutions, using the best material and equipment, through the best technicians. who deliver-landscape projects to a high standard in a professional, safe, profitable? and environmentally responsible manner."}
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <GeneralBanner
          positionOfBanner={"lg:order-first"}
          Image={"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          Title={"Our Objective"}
          Content={"The company was founded in the belief of the importance of creating responsible designs of all types, scales and at all stages of planning. We look towards the uniqueness of natural surroundings to provide inspiration, while continuously evolving to integrate new understandings."}
        />
      </div>
      <div data-aos="fade-in" data-aos-duration="1000">
        <Values />
      </div>
    </>
  );
};

export default Aboutv2;
