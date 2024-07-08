// import images
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
// Import Swiper React components;
import { Swiper, SwiperSlide } from "swiper/react";
import "./FirstSlide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function FirstSlider() {
  return (
    <div className="col-span-12 h-[500px]">
      <Swiper
        className="h-full w-full  mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img className="slider-image" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-image" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-image" src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
