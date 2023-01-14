import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Lazy, Navigation } from "swiper";

// images
import slider1 from "../../assets/images/slider/slider1.svg";
import slider2 from "../../assets/images/slider/slider2.webp";
import slider3 from "../../assets/images/slider/slider3.webp";

export default function Slider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        lazy={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
        navigation={true}
        modules={[Lazy, Navigation, Autoplay]}
        className="mySwiper max-lg:mt-12 lg:mt-20"
      >
        <SwiperSlide>
          <img data-src={slider1} alt="Slider" className="swiper-lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img data-src={slider2} alt="Slider" className="swiper-lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img data-src={slider3} alt="Slider" className="swiper-lazy" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
