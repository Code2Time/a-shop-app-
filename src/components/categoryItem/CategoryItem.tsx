import { Icategory } from "../types/Iproducts";
import "./CategoryItem.css";

function CategoryItem({ image, name }: Icategory) {
  return (
    <div  className="col-span-12 sm:col-span-6 md:col-span-3  h- 28 sm:h-80  shadow-sm shadow-blue-three cursor-pointer  rounded-sm p-2 ">
      <div className="category-container w-full h-full rounded-sm overflow-hidden relative ">
        <div className="category-img w-full h-full">
          <img className="w-full h-full" src={image} alt="category-item" />
        </div>
        <div className="category-info  flex flex-col justify-center items-center absolute z-10 m-0 inset-0  text-center">
          <h1 className="hidden  head category-title uppercase text-2xl text-blue-four ">{name}</h1>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
