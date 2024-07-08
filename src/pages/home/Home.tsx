import "./Home.css";
import Head from "../../components/Head/Head";
import Container from "../../components/container/Container";
import Navbar from "../../components/navbar/Navbar";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Category from "../../components/category/Category";
import Ads from "../../components/ads/Ads";
import Exclusivity from "../../components/exclusivity/Exclusivity";
import Explore from "../../components/explore/Explore";
import Instagram from "../../components/instagram/Instagram";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import BrandSlider from "../../components/thirdslideshow/BrandSlider";
import FirstSlider from "../../components/firstSlider/FirstSlider";

function Home() {
  // var scroll_left = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  // var scroll_top = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div data-aos="fade-up" data-aos-duration="900">
          <section className="bg-blue-three dark:bg-bg">
            <Head />
          </section>
          <Navbar />
          <Container>
            <div className=" mt-10 h-[500px]   w-full  grid grid-cols-12 gap-5 shadow-md shadow-blue-three  rounded">
              <FirstSlider />
            </div>
            <div className="mt-20 h-autow-full  grid grid-cols-12 gap-5  ">
              <h1 className="dark:text-blue-two text-blue-four col-span-12 brand-text flex items-center justify-start border-l-4 border-blue-500 p-2 dark:border-l-0  my-2 rounded-b rounded-t ">
                <img
                  className="h-auto w-5  sm:w-12 hidden dark:block opacity-70"
                  src="https://codenight.ir/_next/image?url=%2Fassets%2Fimages%2FtitleCircleRed.png&w=128&q=75"
                  alt=""
                />
                <span className="poppins sm:text-xl">Top brands</span>
              </h1>
              <BrandSlider />
            </div>
            <div
              data-aos="slide-up"
              data-aos-duration="1500"
              className="arrow-icon flex  flex-col justify-center items-center mt-16"
            >
              <Link to="/shop">
                <MdKeyboardDoubleArrowDown className="arrow-btn size-5 sm:size-10 text-blue-four animate-bounce   dark:text-gray-950 " />
                <MdKeyboardArrowDown className="arrow-btn size-5 sm:size-10 -mt-5  text-blue-four animate-bounce  dark:text-gray-950" />
              </Link>
            </div>
            <Category />
          </Container>
          <div className=" mt-5 sm:mt-36      md:mt-40">
            <Ads
              children="  Lorem ipsum dolor sit amet consectetur adiibus eligendi posrat commodi "
              key={1}
              baseVelocity={0.7}
            />{" "}
            <Ads
              children="  Lorem ipsum dolor sit amet consectetur adiibus eligendi posrat commodi "
              key={1}
              baseVelocity={-0.7}
            />
          </div>
          <Container>
            <Explore />
            <Exclusivity />
            <Instagram />
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
