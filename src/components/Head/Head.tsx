import { AiOutlineInstagram } from "react-icons/ai";
import "./Head.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Darkmode from "../darkmode/Darkmode";

function Head() {
  return (
    <>
      <div id="head" className="hidden md:block">
        <div className="dark:text-head-white text-blue-four   flex justify-around items-center h-7   ">
          <div className="mt-2">
            <Darkmode />
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <AiOutlineInstagram
              size={15}
              className="hover:text-head-white cursor-pointer dark:hover:text-blue-three "
            />
            <TiSocialLinkedin
              size={17}
              className="hover:text-head-white cursor-pointer dark:hover:text-blue-three"
            />
            <FaFacebookF
              size={15}
              className="hover:text-head-white cursor-pointer dark:hover:text-blue-three"
            />
            <FaTwitter
              size={15}
              className="hover:text-head-white cursor-pointer dark:hover:text-blue-three"
            />
          </div>
          <div className=" flex  items-center justify-center gap-7">
            <div className="flex  items-center justify-center gap-2 cursor-pointer dark:hover:text-blue-three hover:text-head-white">
              <span className="head text-xs ">code2time@gmail.com</span>
              <CgMail size={20} />
            </div>
            <div className=" flex  items-center justify-center gap-2 cursor-pointer dark:hover:text-blue-three hover:text-head-white">
              <span className="head text-xs">98-933-321-87-66</span>
              <FaPhoneAlt size={15} />
            </div>
          </div>
        </div>
      </div>
      <hr className="hidden md:block" />
    </>
  );
}

export default Head;
