import { Link } from "react-router-dom";
import "./404.css";
function PageNotFound() {
  return (
    <>
    <div
      data-aos="flip-right"
      className="w-full h-[100vh] dark:bg-bg grid grid-cols-12 font-extrabold text-center"
    >
      <h1 className="header-text  col-span-12 text-6xl text-center mt-96 head">
        OOPS...!
      </h1>
      <p className="col-span-12 text-center text-gray-800 dark:text-blue-three -mt-20">
        page not found :)
        <br />
        <span>Lorem ipsum dolor sit amet.</span>
      </p>
    </div>
  </>)
}

export default PageNotFound;
