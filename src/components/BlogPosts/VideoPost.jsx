import React, { useEffect } from "react";
import Video from "../Video";
import AOS from "aos";
import "aos/dist/aos.css";
import PostSeeMore from "../ProjectCard/PostSeeMore";

const VideoPost = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  if (props.pos == 0) {
    return (
      <section>
        <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="mr-auto place-self-center lg:col-span-6">
            <h2 className="text-3xl font-bold sm:text-4xl text-left mb-5">
              {props.title}
            </h2>
            <PostSeeMore content={props.body} />
          </div>
          <div class="hidden lg:mt-0 lg:col-span-6 lg:flex object-cover ml-12">
            <iframe
              className="rounded-lg shadow-lg"
              title="YouTube Video Player"
              width="640"
              height="390"
              src={`https://www.youtube.com/embed/${props.videoId}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div class="lg:mt-0 lg:col-span-6 lg:flex object-cover mr-12">
            <iframe
              className="rounded-lg shadow-lg w-full"
              title="YouTube Video Player"
              width="640"
              height="390"
              src={`https://www.youtube.com/embed/${props.videoId}`}
              allowFullScreen
            ></iframe>
          </div>
          <div class="mr-auto place-self-center lg:col-span-6">
            <h2 className="text-3xl font-bold sm:text-4xl text-left mb-5">
              {props.title}
            </h2>
            <PostSeeMore content={props.body} />
          </div>
        </div>
      </section>
    );
  }
};

export default VideoPost;
