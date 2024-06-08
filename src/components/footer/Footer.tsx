import { Link } from "react-router-dom";
import "./Footer.css";
import { FaStore } from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import { BiCategoryAlt } from "react-icons/bi";

function Footer() {
  return (
    <>
      <hr className="h-4" />
      <div className="w-full h-auto grid grid-cols-12 gap-2 p-2 md:p-4 justify-center items-center sm:pb-0 ">
        <div className="col-span-12 md:col-span-4 p-3">
          <h1 className="footer-title uppercase text-black dark:text-blue-three head flex flex-row-reverse justify-end  items-center gap-2 ">
            <span>our shop</span>
            <FaStore />
          </h1>
          <p className="text-justify p-2 text-gray-700 dark:text-blue-four poppins">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            eaque! Eveniet soluta rem enim accusantium, explicabo tenetur
            asperiores hic quam{" "}
            <span className="hidden sm:block">
              aperiam nobis omnis, cumque architecto aliquid earum laudantium
              vitae eum!
            </span>
          </p>
          <p className="text-justify p-2 hidden md:block text-gray-700 dark:text-blue-four poppins">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            eaque! Eveniet soluta rem enim accusantium, explicabo tenetur
            asperiores hic quam aperiam nobis omnis, cumque architecto aliquid
            earum laudantium vitae eum!
          </p>
        </div>
        <div className="col-span-6 md:col-span-4  flex flex-col  justify-center  md:mx-auto gap-2 md:gap-4 p-3">
          <h1 className="text-black dark:text-blue-three head uppercase flex flex-row-reverse justify-end  items-center gap-2 ">
            <span> quick links</span>
            <LiaLinkSolid />
          </h1>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <Link to="/about">about us</Link>
          </h3>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <a href="">contact us</a>
          </h3>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <a href="">contribute</a>
          </h3>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <a href="">our location</a>
          </h3>
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col  justify-center md:mx-auto gap-2 md:gap-4 p-3">
          <h1 className="text-black dark:text-blue-three head uppercase flex flex-row-reverse justify-end  items-center gap-2 ">
            <span> categories</span>
            <BiCategoryAlt />
          </h1>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <Link to="/about">about us</Link>
          </h3>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two ">
            <a href="">contact us</a>
          </h3>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <a href="">contribute</a>
          </h3>
          <h3 className="text-gray-700 dark:text-blue-four poppins dark:hover:text-blue-two  ">
            <a href="">our location</a>
          </h3>
        </div>

        <p className="copyright-text col-span-12 text-center mt-10 text-xs text-slate-500 uppercase">
          Copyright &copy; 2024 All Rights Reserved by amir-thp
        </p>
      </div>
    </>
  );
}

export default Footer;
