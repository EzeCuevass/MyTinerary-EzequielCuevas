import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../styles/slider.css";

// import required modules
import { Grid, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="child-Slide">Slide 1</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 2</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 3</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 4</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 5</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 6</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 7</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 8</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 9</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 10</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 11</SwiperSlide>
        <SwiperSlide className="child-Slide">Slide 12</SwiperSlide>
      </Swiper>
    </>
  );
}
