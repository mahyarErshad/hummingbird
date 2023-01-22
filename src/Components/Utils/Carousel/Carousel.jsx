import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./carousel.css";
import slider1 from "../../../assets/images/slider/1.svg"
import slider2 from "../../../assets/images/slider/2.svg"
import slider3 from "../../../assets/images/slider/3.svg"
import slider4 from "../../../assets/images/slider/4.svg"
import slider5 from "../../../assets/images/slider/5.svg"
import slider6 from "../../../assets/images/slider/6.svg"
import slider7 from "../../../assets/images/slider/7.svg"
import slider8 from "../../../assets/images/slider/8.svg"
import slider9 from "../../../assets/images/slider/9.svg"
import slider10 from "../../../assets/images/slider/10.svg"
import slider11 from "../../../assets/images/slider/11.svg"
import slider12 from "../../../assets/images/slider/12.svg"
import slider13 from "../../../assets/images/slider/13.svg"
import slider14 from "../../../assets/images/slider/14.svg"
import slider15 from "../../../assets/images/slider/15.svg"
import slider16 from "../../../assets/images/slider/16.svg"
import slider17 from "../../../assets/images/slider/17.svg"
import slider18 from "../../../assets/images/slider/18.svg"
import slider19 from "../../../assets/images/slider/19.svg"
import slider20 from "../../../assets/images/slider/20.svg"
import slider21 from "../../../assets/images/slider/21.svg"
import slider22 from "../../../assets/images/slider/22.svg"
import slider23 from "../../../assets/images/slider/23.svg"
import slider24 from "../../../assets/images/slider/24.svg"
import slider25 from "../../../assets/images/slider/25.svg"
import slider26 from "../../../assets/images/slider/26.svg"
import slider27 from "../../../assets/images/slider/27.svg"
import slider28 from "../../../assets/images/slider/28.svg"
import slider29 from "../../../assets/images/slider/29.svg"
import slider30 from "../../../assets/images/slider/30.svg"
import slider31 from "../../../assets/images/slider/31.svg"
import slider32 from "../../../assets/images/slider/32.svg"
import slider33 from "../../../assets/images/slider/33.svg"
import slider34 from "../../../assets/images/slider/34.svg"

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <h2 className="text-lg font-bold my-5">برنده بهترین محصول 2022 G2</h2>
    </>
  );
}
