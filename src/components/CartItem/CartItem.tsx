import { FaTrashAlt } from "react-icons/fa";
import "./CartItem.css";
import { useShopingCardContext } from "../../context/ShppingCartContext";

interface Iproduct {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: Iproduct) {
  
  const {
    HandleDecreaseProductQty,
    HandleIncreaseProductQty,
    HandleRemoveProduct,

  }   = useShopingCardContext();
  return (
    <div className="CartItem-container w-full overflow-x-auto h-auto mx-auto flex flex-row justify-evenly items-center  gap-5   rounded-lg px-3 py-5 my-2">
      <img
        src="https://4kwallpapers.com/images/walls/thumbs_3t/17401.jpg"
        alt="Cart Item"
        className="size-30 sm:size-24 rounded-sm cursor-pointer"
      />
      <div>
        <h1 className="uppercase line-clamp-1 head dark:text-my-white">
         name
        </h1>
        <p className="uppercase line-clamp-1 poppins dark:text-slate-400">
          description
        </p>
      </div>
      <h1 className="dark:text-blue-three text-xl head">{qty}</h1>
      <h1 className="dark:text-blue-three smd:text-xl head ">$12247</h1>
      <div className="control-buttons flex ">
        <button
          onClick={() => {
            HandleIncreaseProductQty(id);
          }}
          className=" dark:text-my-white mx-2 text-2xl hover:text-blue-three dark:hover:text-blue-three hover:text-5xl transition-all"
        >
          +
        </button>
        <button
          onClick={() => {
            HandleDecreaseProductQty(id);
          }}
          className=" dark:text-my-white mx-2 text-2xl  hover:text-blue-three dark:hover:text-blue-three hover:text-5xl transition-all"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            HandleRemoveProduct(id);
          }}
        >
          <FaTrashAlt className="dark:text-my-white   hover:text-red-500 dark:hover:text-red-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
