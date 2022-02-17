import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { slides } from "./content/content";
import Slide from "./Slide/Slide";
import "./Slider.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);
const Slider = () => {
  return (
    <Swiper
      navigation
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
