
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './FirstSlide.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function FirstSlider() {
  return (
    <div className='col-span-12'>
      <Swiper 
      
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
        className="mySwiper"
      >
        <SwiperSlide className=''><img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFajLfQqbQtcflSmaZ-nRocDZwIY_BS39IXKy1qoY483VLqnkNQh76M6-RhqDZdTCTQ&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFajLfQqbQtcflSmaZ-nRocDZwIY_BS39IXKy1qoY483VLqnkNQh76M6-RhqDZdTCTQ&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFajLfQqbQtcflSmaZ-nRocDZwIY_BS39IXKy1qoY483VLqnkNQh76M6-RhqDZdTCTQ&s" alt="" /></SwiperSlide>
     
      </Swiper>
    </div>
  );
}
