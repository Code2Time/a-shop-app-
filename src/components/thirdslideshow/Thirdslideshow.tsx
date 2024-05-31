import './Thidslideshow.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from "./data/SlideData";

function Thirdslideshow() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 1,
    cssEase: "linear",
    rtl : true
  };

  return (
    <div className="col-span-12  ">
      <Slider adaptiveHeight {...settings}>
        {SlideData.map((item) => (
          <div key={item.id} className='sm:p-5 shadow-md sm:shadow-sm mx-2 rounded-full slick-container '>
            <img src={item.img} alt="brands-image" className='rounded-full'  />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Thirdslideshow;
