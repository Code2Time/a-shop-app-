import { FaTrashAlt } from "react-icons/fa"
import './CartItem.css'

function CartItem() {
  return (
    <div className="CartItem-container w-full overflow-x-auto h-auto mx-auto flex flex-row justify-evenly items-center  gap-5   rounded-lg px-3 py-5 my-2">
    <img src="https://4kwallpapers.com/images/walls/thumbs_3t/17401.jpg" alt="Cart Item" className="size-30 sm:size-24 rounded-sm cursor-pointer" />
    <div>
        <h1 className="uppercase line-clamp-1 head dark:text-my-white">name product</h1>
        <p className="uppercase line-clamp-1 poppins dark:text-slate-400">description</p>
    </div>
    <h1 className="dark:text-blue-three text-xl head">5</h1>
    <h1 className="dark:text-blue-three smd:text-xl head ">$12247</h1>
    <div className="control-buttons flex ">
        <button className=" dark:text-my-white mx-2 text-2xl hover:text-blue-three dark:hover:text-blue-three hover:text-5xl transition-all">+</button>
        <button className=" dark:text-my-white mx-2 text-2xl  hover:text-blue-three dark:hover:text-blue-three hover:text-5xl transition-all">-</button>
    </div>
    <div>
    <FaTrashAlt className="dark:text-my-white   hover:text-red-500 dark:hover:text-red-500 cursor-pointer" />
    </div>
    </div>
  )
}

export default CartItem
