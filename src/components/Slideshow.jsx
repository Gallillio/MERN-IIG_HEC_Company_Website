import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = (props) => {
  const slideHeight = "600px"; // Adjust the height as needed

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={1500}
      interval={4500}
      emulateTouch={true}
      autoFocus={true}
      stopOnHover={false}
      showStatus={false}
    >
      <div className="carousel-slide z-0" style={{ height: slideHeight }}>
        <img
          src="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
        {/* <div className="legend">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div> */}
      </div>
      <div className="carousel-slide z-0" style={{ height: slideHeight }}>
        <img
          src="https://www.conncoll.edu/media/major-images/ArchitecturalStudies.jpg"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="carousel-slide z-0" style={{ height: slideHeight }}>
        <img
          src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </div>
    </Carousel>
  );
};

export default Slideshow;
