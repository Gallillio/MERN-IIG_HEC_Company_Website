import React, { useEffect } from "react";
import Picture from "../../components/Picture";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../components/Banner";
import MiniCard from "../../components/MiniCard";

import Slideshow from "../../components/Slideshow";

const Home = () => {
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* Collage */}
      <div data-aos="fade-up" data-aos-duration="1500">
        {/* <Collage /> */}
        <Slideshow />
      </div>
      {/* vision */}
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150">
        <Banner
          title={"Our Vision"}
          visibility={""}
          image="https://www.bruegel.org/sites/default/files/styles/16_9_extra_large/public/2022-07/buildings_visual.webp?itok=p4H9myii"
          body={
            <>
              <strong>
                To provide inspired{" "}
                <strong className="text-success">green</strong> solution
              </strong>{" "}
              for those who seek innovation and creativity in the Landscape
              field and aims at making a better quality of life for present and
              future generations.
            </>
          }
        />
      </div>

      {/* Picture and Contact us */}
      <div data-aos="fade-up" data-aos-duration="1500">
        <Picture />
      </div>
      <div>
        <div className="mt-8 text-left ml-14">
          <h2 className="text-3xl font-bold sm:text-4xl mx-auto">
            Featured Projects
          </h2>
        </div>
        <div
          className="grid lg:grid-cols-3 gap-10 my-6 py-10 px-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-span-1">
            <MiniCard
              image={
                "https://firebasestorage.googleapis.com/v0/b/iig-data.appspot.com/o/Picture12.jpg?alt=media&token=8f542156-4a5a-4499-9d7a-31d91279be02"
              }
              title={"Neom Horticluture Center of Excellence"}
              content={
                "2.9-million-kilometer square site embedding 12000 palms ( over existing 67 plantation farms ) to be increased to 30000 palms to be distributed over oasis’s central core / spine."
              }
              link={"/Projects/Project_1"}
            />
          </div>
          <div
            className="col-span-1"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <MiniCard
              image={
                "https://firebasestorage.googleapis.com/v0/b/iig-data.appspot.com/o/tabouk_001.jpg?alt=media&token=542ad5b0-48c1-43e2-a487-80164465b2c4"
              }
              title={"Tabouk Sharma Neom Main Gate"}
              content={
                "The architectural centerpiece draws inspiration from NEOM's logo and nature's organic lines – sea waves, mountains, and the Saudi headscarf. "
              }
            />
          </div>
          <div
            className="col-span-1"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <MiniCard
              image={
                "https://firebasestorage.googleapis.com/v0/b/iig-data.appspot.com/o/001.jpg?alt=media&token=17f9f801-62e1-4379-b673-12eb06a080d3"
              }
              title={"ORO Squre"}
              content={
                "ORO Square redefines outdoor shopping, leveraging a vibrant landscape to seamlessly integrate facilities and activities, ensuring a unique and convenient experience for visitors."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
