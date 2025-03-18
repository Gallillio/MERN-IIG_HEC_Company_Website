import React from "react";
import Map from "../assets/images/Map.png";

const Picture = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${Map})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-1/2 inset-0 bg-white/75 sm:bg-transparent dark:sm:from-black/95 sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left rtl:sm:text-right ">
          <div className="card w-fit bg-base-100 shadow-xl">
            <div className="card-body">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Over
                <strong className=" font-extrabold text-success"> 60 </strong>
                Projects until now throughout Egypt & Saudi Arabia
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                And many more to come!
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="/Contact"
                  className="w-full rounded bg-success px-12 py-3 btn btn-success hover:btn-error sm:w-auto"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Picture;
