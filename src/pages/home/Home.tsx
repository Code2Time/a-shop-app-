import "./Home.css";
import Head from "../../components/Head/Head";
import Container from "../../components/container/Container";
import Navbar from "../../components/navbar/Navbar";
import Firstslideshow from "../../components/first slideshow/Firstslideshow";
import Secondslideshow from "../../components/secondslideshow/Secondslideshow";
import Thirdslideshow from "../../components/thirdslideshow/Thirdslideshow";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div data-aos="fade-up" data-aos-duration="900">
      <section className="bg-blue-three dark:bg-bg">
        <Head />
      </section>
      <Navbar />
      <Container>
        <div className="mt-10 h-[500px]  w-full  grid grid-cols-12 gap-5 bg-[#edf2f7] dark:bg-bg ">
          <Firstslideshow />
          <Secondslideshow />
        </div>
        <div className="mt-20 h-autow-full  grid grid-cols-12 gap-5  ">
          <h1 className="dark:text-blue-two text-blue-four col-span-12 brand-text flex items-center justify-start border-l-4 border-blue-500 p-2 dark:border-l-0 ">
            <img
              className="h-auto w-5  sm:w-12 hidden dark:block opacity-70"
              src="https://codenight.ir/_next/image?url=%2Fassets%2Fimages%2FtitleCircleRed.png&w=128&q=75"
              alt=""
            />
            <span className="head sm:text-xl">Top brands</span>
          </h1>
          <Thirdslideshow />
        </div>
        <div className="arrow-icon flex  flex-col justify-center items-center mt-16">
          <Link to='/shop'>
          <MdKeyboardDoubleArrowDown className="arrow-btn size-5 sm:size-10 text-blue-four animate-bounce   dark:text-gray-950 " />
          <MdKeyboardArrowDown  className="arrow-btn size-5 sm:size-10 -mt-5  text-blue-four animate-bounce  dark:text-gray-950" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
