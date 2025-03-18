import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { EffectCards, Pagination, EffectFade, Autoplay } from "swiper/modules";

const Carousel = (props) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={props.effect} //change to cards or pagination
        modules={[EffectCards, Pagination, EffectFade, Autoplay]}
        className="mySwiper"
      >
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              className="h-28 lg:h-96 w-screen rounded-lg shadow-lg dark:shadow-gray-800 my-6 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
