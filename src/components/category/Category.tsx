import "./Category.css";
import { Link } from "react-router-dom";
import CategoryItem from "../categoryItem/CategoryItem";
import { Categories } from "./CategoryData";

const Category = () => {
  return (
    <>
      <div
        data-aos="slide-up"
        className="grid grid-cols-12 gap-2 my-14 p-10 sm:p-0 h-auto"
      >
        <h1 className=" dark:text-blue-two text-blue-four col-span-12 brand-text flex items-center justify-start border-l-4 border-blue-500 p-2 dark:border-l-0 my-4 sm:my-16  rounded-b rounded-t">
          <img
            className="h-auto w-5  sm:w-12 hidden dark:block opacity-70"
            src="https://codenight.ir/_next/image?url=%2Fassets%2Fimages%2FtitleCirclePink.png&w=128&q=75"
            alt=""
          />
          <span className="poppins sm:text-xl">Some Categorys</span>
        </h1>
        {Categories.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
        <Link
          to="/products"
          className=" col-span-12 sm:col-span-6  text-center mt-7 sm:mt-16  sm:col-start-4 h-5 sm:h-10"
        >
          <button
            id="more-btn"
            className="bg-my-white dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three w-full h-full rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three"
          >
            see more...
          </button>
        </Link>
      </div>
    </>
  );
};

export default Category;
