import { Link } from "react-router-dom";
import "./ProductItem.css";
import { Iallproducts } from "../types/Iproducts";

function ProductItem({ name, img, description, id }: Iallproducts) {
  return (
    <div className="product-item-container col-span-12 sm:col-span-6 md:col-span-4 smd:col-span-3 h-auto  rounded-sm shadow-blue-three shadow-sm ">
      <Link to={`/product/${id}`}>
        <div className="alls relative ">
          <div className="item-image top-0 inset-0 ">
            <img src={img} alt="product-item" className="" />
          </div>
          <div className="hidden item-info">
            <div className=" absolute top-0 inset-0 flex flex-col justify-center items-center gap-6 p-2 ">
              <h2 className="text-center head text-xl dark:text-blue-three ">
                {name}
              </h2>
              <p className="text-blue-four  dark:text-my-white text-center line-clamp-1">
                {description}
              </p>
              <Link className="w-[70%] mt-2 smd:mt-4 " to={`/product/${id}`}>
                <button className="py-1 poppins transition-all w-full bg-slate-300 dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three  rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three">
                  Add to cart{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
