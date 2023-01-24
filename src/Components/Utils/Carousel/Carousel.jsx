import React from "react";
import Slider from "react-slick";

function Carousel() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const settings = {
    dots: false,
    autoplay: true,
    draggable: true,
    swipeToSlide: true,
    accessibility: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} centerMode={true} centerPadding="20px" rtl={true} className="bg-red-700">
        {arr.map((item, index) => (
          <h1>hi</h1>
        ))}
      </Slider>
    </>
  );
}

export default Carousel;
