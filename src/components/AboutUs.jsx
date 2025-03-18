import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Who are we?
          </h1>
          <p className="max-w-2xl mb-6 subtext-color font-light lg:mb-8 md:text-lg lg:text-xl">
            IIG The International Investment Group for Export, Trade &
            Engineering Services is one of the Egyptian international companies
            in exporting, trading and engineering services as one of the
            subsidiaries of the Investment Authority. In the light of the
            development of the size of Arab projects and their engineering
            requirements at the level of design and follow-up, we have the
            investment group to strengthen the engineering services sector to
            work in a coalition with one of the strong is one of the "high
            caliber" engineering organizations such as HEC International .
          </p>
          <a
            href="/Contact"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Contact Us
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex object-scale-down w-4/5 h-4/5 ml-20">
          <img alt='' src="https://media.istockphoto.com/id/1189309564/photo/modern-high-end-architecture-project.jpg?s=612x612&w=0&k=20&c=F3bbJrT37BKZhJiub0Av4po5_nxLbexrqZyTQ4emzR0=" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
