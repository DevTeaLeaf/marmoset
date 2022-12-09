import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./index.css";

import slider1 from "../../assets/img/slider/1.png";
import slider2 from "../../assets/img/slider/2.png";
import slider3 from "../../assets/img/slider/3.png";
import slider4 from "../../assets/img/slider/4.png";
import slider5 from "../../assets/img/slider/5.png";
import slider6 from "../../assets/img/slider/6.png";
import slider7 from "../../assets/img/slider/7.png";
import slider8 from "../../assets/img/slider/8.png";
import slider9 from "../../assets/img/slider/9.png";
import slider10 from "../../assets/img/slider/10.png";
import slider11 from "../../assets/img/slider/11.png";
import slider12 from "../../assets/img/slider/12.png";
import slider13 from "../../assets/img/slider/13.png";
import slider14 from "../../assets/img/slider/14.png";
import slider15 from "../../assets/img/slider/15.png";
import slider16 from "../../assets/img/slider/16.png";
import slider17 from "../../assets/img/slider/17.png";
import slider18 from "../../assets/img/slider/18.png";
import slider19 from "../../assets/img/slider/19.png";
import slider20 from "../../assets/img/slider/20.png";
import slider21 from "../../assets/img/slider/21.png";
import slider22 from "../../assets/img/slider/22.png";
import slider23 from "../../assets/img/slider/23.png";
import slider24 from "../../assets/img/slider/24.png";
import slider25 from "../../assets/img/slider/25.png";
import slider26 from "../../assets/img/slider/26.png";
import slider27 from "../../assets/img/slider/27.png";
import slider28 from "../../assets/img/slider/28.png";
import slider29 from "../../assets/img/slider/29.png";
import slider30 from "../../assets/img/slider/30.png";
import slider31 from "../../assets/img/slider/31.png";
import slider32 from "../../assets/img/slider/32.png";
import slider33 from "../../assets/img/slider/33.png";
import slider34 from "../../assets/img/slider/34.png";
import slider35 from "../../assets/img/slider/35.png";
import slider36 from "../../assets/img/slider/36.png";
import slider37 from "../../assets/img/slider/37.png";
import slider38 from "../../assets/img/slider/38.png";
import slider39 from "../../assets/img/slider/39.png";
import slider40 from "../../assets/img/slider/40.png";
import slider41 from "../../assets/img/slider/41.png";
import slider42 from "../../assets/img/slider/42.png";
import slider43 from "../../assets/img/slider/43.png";
import slider44 from "../../assets/img/slider/44.png";
import slider45 from "../../assets/img/slider/45.png";
import slider46 from "../../assets/img/slider/46.png";
import slider47 from "../../assets/img/slider/47.png";
import slider48 from "../../assets/img/slider/48.png";
import slider49 from "../../assets/img/slider/49.png";
import slider50 from "../../assets/img/slider/50.png";
import slider51 from "../../assets/img/slider/51.png";
import slider52 from "../../assets/img/slider/52.png";
import slider53 from "../../assets/img/slider/53.png";
import slider54 from "../../assets/img/slider/54.png";

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
