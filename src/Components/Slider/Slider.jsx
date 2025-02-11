import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Slider.css";

const slides = [
  { id: 1, image: "/IMAGESS/h.png.jpg", title: "", desc: "Innovative Farming Practices." },
  { id: 2, image: "/IMAGESS/avacodo.png.jpg", title: "", desc: "Smart Farming Solutions." },
  { id: 3, image: "/IMAGESS/cardamom1.png.jpg", title: "", desc: "Precision Agriculture." }
];

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
