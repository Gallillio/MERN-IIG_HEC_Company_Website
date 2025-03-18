import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import PostSeeMore from "../ProjectCard/PostSeeMore";

const ArticlePost = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  if (props.pos == 0) {
    return (
      <section>
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl text-left mb-5">
              {props.title}
            </h2>
            <PostSeeMore content={props.body} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div
          class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div class="mx-auto">
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

export default ArticlePost;
