import CategoryItem from "../categoryItem/CategoryItem";
import { Categories } from "./CategoryData";

const Category = () => {



  return (
    <div className="grid grid-cols-12 gap-2 my-14 p-10 sm:p-0 h-auto">
    <h1 className=" dark:text-blue-two text-blue-four col-span-12 brand-text flex items-center justify-start border-l-4 border-blue-500 p-2 dark:border-l-0 my-2  rounded-b rounded-t">
            <img
              className="h-auto w-5  sm:w-12 hidden dark:block opacity-70"
              src="https://codenight.ir/_next/image?url=%2Fassets%2Fimages%2FtitleCirclePink.png&w=128&q=75"
              alt=""
            />
            <span className="poppins sm:text-xl">Categorys</span>
          </h1>
      {Categories.map((item) => (
       <CategoryItem key={item.id} {...item}  />
      ))}
    </div>
  );
};

export default Category;
