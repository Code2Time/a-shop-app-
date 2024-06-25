import React from 'react'
import { Iallproducts } from '../types/Iproducts'

function Suggestion({name , img , description }:Iallproducts) {
  return (
       <div className=" col-span-6 size-32 md:size-56 rounded-sm shadow-blue-three shadow-sm ">
        <div className="alls relative ">
          <div className="item-image top-0 inset-0 ">
            <img
              src={img}
              alt="product-item"
              className=""
            />
          </div>
          <div className="hidden item-info">
            <div className=" absolute top-0 inset-0 flex flex-col justify-center items-center gap-6 p-2 ">
              <h2 className="text-center head text-xl dark:text-blue-three ">{name}</h2>
              <p className="text-blue-four  dark:text-my-white text-center line-clamp-1">
              {description}
              </p>
        
                <button className="py-1 poppins transition-all w-full bg-slate-300 dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three  rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three">
                  Add to cart{" "}
                </button>

            </div>
          </div>
        </div>
    </div>

  )
}

export default Suggestion
