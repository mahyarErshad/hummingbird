import React from "react";

import HeroSlider, { Overlay, Slide } from "hero-slider";

import slider1 from "../../assets/images/slider/slider1.svg";
import slider2 from "../../assets/images/slider/slider2.webp";
import slider3 from "../../assets/images/slider/slider3.webp";

function Slider() {
  return (
    <HeroSlider
      height={"40vh"}
      className="mt-20 w-[90%] mx-auto rounded-md"
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
    >
      <Overlay></Overlay>

      <Slide
        background={{
          backgroundImageSrc: slider1,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slider2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: slider3,
        }}
      />
    </HeroSlider>
  );
}

export default Slider;
