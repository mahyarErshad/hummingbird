import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

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
import { ReactComponent as Wheat } from "../../../assets/images/wheat.svg";

export default function Carousel() {
  const array = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34];
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  return (
    <section className="mt-20 flex-center max-md:w-[28.125rem] md:w-[31.25rem] relative">
      <button className="absolute right-button right-[-2.5rem] top-[25%]" onClick={prevHandler}>
        <Wheat className="flip" fill="#23cca2" />
      </button>
      <button className="absolute left-button left-[-2.5rem] top-[25%]" onClick={nextHandler}>
        <Wheat fill="#23cca2" />
      </button>
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        breakpoints={{
          550: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {array.map((item) => {
          return (
            <SwiperSlide key={item} className="max-md:w-[1.5625rem] md:w-[5.3125rem] h-[6.875rem]">
              <img src={item} alt={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
