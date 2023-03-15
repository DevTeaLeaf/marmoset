import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./index.css";

import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  slider11,
  slider12,
  slider13,
  slider14,
  slider15,
  slider16,
  slider17,
  slider18,
  slider19,
  slider20,
  slider21,
  slider22,
  slider23,
  slider24,
  slider25,
  slider26,
  slider27,
  slider28,
  slider29,
  slider30,
  slider31,
  slider32,
  slider33,
  slider34,
  slider35,
  slider36,
  slider37,
  slider38,
  slider39,
  slider40,
  slider41,
  slider42,
  slider43,
  slider44,
  slider45,
  slider46,
  slider47,
  slider48,
  slider49,
  slider50,
  slider51,
  slider52,
  slider53,
  slider54,
} from "../../assets/img/slider";

const Slider = () => {
  let sliderData = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
    slider13,
    slider14,
    slider15,
    slider16,
    slider17,
    slider18,
    slider19,
    slider20,
    slider21,
    slider22,
    slider23,
    slider24,
    slider25,
    slider26,
    slider27,
    slider28,
    slider29,
    slider30,
    slider31,
    slider32,
    slider33,
    slider34,
    slider35,
    slider36,
    slider37,
    slider38,
    slider39,
    slider40,
    slider41,
    slider42,
    slider43,
    slider44,
    slider45,
    slider46,
    slider47,
    slider48,
    slider49,
    slider50,
    slider51,
    slider52,
    slider53,
    slider54,
  ];
  const screenWidth = window.innerWidth > 767 ? 4 : 2;
  return (
    <div className="swiper_parent">
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={36}
        slidesPerView={screenWidth}
        navigation
        scrollbar={{ draggable: true }}
      >
        {sliderData &&
          sliderData.map((el, index) => (
            <React.Fragment key={index}>
              <SwiperSlide key={index}>
                <div className="swiper_box">
                  <img className="rounded-[14px]" src={el} alt="nft" />
                </div>
              </SwiperSlide>
            </React.Fragment>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
