import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

// images
import image1 from "../../../assets/images/slider/1.svg";
import image2 from "../../../assets/images/slider/2.svg";
import image3 from "../../../assets/images/slider/3.svg";
import image4 from "../../../assets/images/slider/4.svg";
import image5 from "../../../assets/images/slider/5.svg";
import image6 from "../../../assets/images/slider/6.svg";
import image7 from "../../../assets/images/slider/7.svg";
import image8 from "../../../assets/images/slider/8.svg";
import image9 from "../../../assets/images/slider/9.svg";
import image10 from "../../../assets/images/slider/10.svg";
import image11 from "../../../assets/images/slider/11.svg";
import image12 from "../../../assets/images/slider/12.svg";
import image13 from "../../../assets/images/slider/13.svg";
import image14 from "../../../assets/images/slider/14.svg";
import image15 from "../../../assets/images/slider/15.svg";
import image16 from "../../../assets/images/slider/16.svg";
import image17 from "../../../assets/images/slider/17.svg";
import image18 from "../../../assets/images/slider/18.svg";
import image19 from "../../../assets/images/slider/19.svg";
import image20 from "../../../assets/images/slider/20.svg";
import image21 from "../../../assets/images/slider/21.svg";
import image22 from "../../../assets/images/slider/22.svg";
import image23 from "../../../assets/images/slider/23.svg";
import image24 from "../../../assets/images/slider/24.svg";
import image25 from "../../../assets/images/slider/25.svg";
import image26 from "../../../assets/images/slider/26.svg";
import image27 from "../../../assets/images/slider/27.svg";
import image28 from "../../../assets/images/slider/28.svg";
import image29 from "../../../assets/images/slider/29.svg";
import image30 from "../../../assets/images/slider/30.svg";
import image31 from "../../../assets/images/slider/31.svg";
import image32 from "../../../assets/images/slider/32.svg";
import image33 from "../../../assets/images/slider/33.svg";
import image34 from "../../../assets/images/slider/34.svg";

export default function Carousel() {
  const array = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34];
  return (
    <section className="max-w-[58.75rem] mt-20 mx-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
    </section>
  );
}
