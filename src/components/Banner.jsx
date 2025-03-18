import React from "react";

const Banner = (props) => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${props.image})` }}
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div className="w-full flex flex-col self-center mx-auto px-10 py-32 lg:flex lg:h-screen lg:items-center backdrop-blur-sm shadow-2xl">
          <div className="card w-fit bg-base-100 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl self-center font-extrabold sm:text-5xl">
                {props.title}
              </h1>
              <div className="mx-auto max-w-xl text-center space-y-12">
                <p className="mt-4 sm:text-xl/relaxed drop-shadow-2xl">
                  {props.body}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a href="/About">
                    <button
                      type="button"
                      className={`btn btn-success btn-outline h-1/4 w-36 btn-sm rounded-md ${props.visibility}`}
                      data-te-ripple-init
                    >
                      About Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
