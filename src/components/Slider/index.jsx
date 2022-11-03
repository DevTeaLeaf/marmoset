import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./index.css";
import slider1 from "../../assets/img/slider1.png";
import slider2 from "../../assets/img/slider2.png";
import slider3 from "../../assets/img/slider3.png";
import slider4 from "../../assets/img/slider4.png";
import slider5 from "../../assets/img/slider5.png";
import slider6 from "../../assets/img/slider6.png";

const Slider = () => {
  let sliderData = [slider1, slider2, slider3, slider4, slider5, slider6];
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
