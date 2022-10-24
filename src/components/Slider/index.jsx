import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./index.css";
import nft1 from "../../assets/img/nft2.png";
import nft2 from "../../assets/img/nft3.png";
import nft3 from "../../assets/img/nft4.png";
import nft4 from "../../assets/img/nft5.png";

const Slider = () => {
  let sliderData = [nft1, nft2, nft3, nft4, nft1, nft2];
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
                  <img src={el} alt="nft" />
                </div>
              </SwiperSlide>
            </React.Fragment>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
