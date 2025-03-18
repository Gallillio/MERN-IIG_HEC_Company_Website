import React from "react";

const MiniCard = (props) => {
  return (
    <div class="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04) bg-transparent hover:underline">
      <div
        class="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          class="rounded-t-lg h-56 w-full object-cover"
          src={props.image}
          alt=""
        />
        <a href={props.link || "#!"}>
          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div class="py-6 px-4">
        <h5 class="mb-2 text-xl text-base-content font-medium leading-tight">
          {props.title}
        </h5>
        <p class="mb-4 subtext-color">
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default MiniCard;
