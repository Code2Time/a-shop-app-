import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@headlessui/react";




function Thirdslideshow() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 1,
        cssEase: "linear",
        
      };
  
  return (
    <div className="col-span-12">
    <Slider {...settings}>
    <div>
      <img src="https://4kwallpapers.com/images/walls/thumbs/16766.jpg" alt="" />
    </div>
    <div>
     <img src="https://4kwallpapers.com/images/walls/thumbs/16759.jpg" alt="" />
    </div>
    <div>
     <img src="https://4kwallpapers.com/images/walls/thumbs/16772.jpg" alt="" />
    </div>
    <div>
      <img src="https://4kwallpapers.com/images/walls/thumbs/16809.jpg" alt="" />
    </div>
    <div>
     <img src="https://4kwallpapers.com/images/walls/thumbs/16794.jpg" alt="" />
    </div>
  
  </Slider>
  </div>
  );
}

export default Thirdslideshow
