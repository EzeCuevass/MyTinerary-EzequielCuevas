import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import data from "../data.json"
import "../styles/slider.css";

// import required modules
import { Autoplay, Navigation, Grid, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <div className="background-swiper">
      <Swiper
        slidesPerGroup={2}
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
        { data.map(destinos =>{ 
            return(
            <SwiperSlide className= "mySwiper" key={destinos.id} style={{backgroundImage:`url("${destinos.image}")`, backgroundSize:"cover", backgroundPosition:"center"}}> 
              <div className="beaches">
                <p className="beaches-text">{destinos.name}</p>
                <p className="beaches-text">{destinos.city}</p>
              </div>
            </SwiperSlide>
        )})
        }
      </Swiper>
      </div>
    </>
  );
}
console.log(data);