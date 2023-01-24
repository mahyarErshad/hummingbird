import React from "react";
import Slider from "react-slick";

function Carousel() {
  const productCarousel = {
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
    <div className="w-full">
      {/* <a className='d-none d-lg-block text-start'>مشاهده همه</a> */}
      <Slider {...productCarousel} centerMode={true} centerPadding="20px" rtl={true} className="py-2">
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <h1>{index}</h1>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
