import { Link } from "react-router-dom"


function Explore() {
  return (
    <div className="explore-container  grid grid-cols-12  h-auto  mt-10 sm:mt-40 md:mt-52 p-2 gap-4  ">
        <div className="col-span-12 sm:col-span-6 flex flex-col ">
            <h1 className="text-black dark:text-blue-three head sm:text-xl md:text-2xl">Explore Our Products</h1>
            <p className='text-gray-700 dark:text-blue-four poppins text-justify p-1 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam repellendus veniam dicta possimus, dolores fugit nostrum quod <span className="sm:hidden md:block">provident et recusandae aperiam culpa, modi facilis? Unde dignissimos voluptatem ad eveniet</span></p>
            <p className='text-gray-700 dark:text-blue-four poppins text-justify p-1 hidden md:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam repellendus veniam dicta possimus, dolores fugit nostrum quod provident et recusandae aperiam culpa, modi facilis? Unde dignissimos voluptatem ad eveniet.</p>
            <p className='text-gray-700 dark:text-blue-four poppins text-justify p-1 hidden md:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam repellendus veniam dicta possimus, dolores fugit nostrum quod provident et recusandae aperiam culpa, modi facilis? Unde dignissimos voluptatem ad eveniet.</p>
            <Link to='/store' className="mt-2 md:mt-14" >
            <button className="transition-all w-[30%] p-2 mt-4 sm:w-[60%] md:w-[50%] bg-my-white dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three  rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three">see more...</button>
            </Link>
        </div>
        <div className="col-span-12 sm:col-span-6 grid grid-cols-12 items-center justify-center">
            <div className="col-span-6 text-center">
                <h1 className="text-black dark:text-blue-three head text-sm md:text-lg">Cat Food</h1>
                <p className="text-gray-700 dark:text-blue-four poppins text-xs sm:text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-span-6 overflow-hidden rounded-sm p-2">
                <img className="  rounded-sm hover:scale-110 transition-all cursor-pointer "  src="https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png" alt="" />
            </div>
            <div className="col-span-6 order-2  text-center ">
                <h1 className="text-black dark:text-blue-three head text-sm  md:text-lg">Dog Food</h1>
                <p className="text-gray-700 dark:text-blue-four poppins text-xs sm:text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-span-6 order-1 overflow-hidden rounded-sm p-2">
                <img  className=" rounded-sm hover:scale-110 transition-all cursor-pointer " src="https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Explore