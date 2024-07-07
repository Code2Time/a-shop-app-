import Head from "../../components/Head/Head";
import Navbar from "../../components/navbar/Navbar";
import logo from '../../assets/img/shop-high-resolution-logo-transparent.png'
import { FaCcPaypal, FaCcVisa} from "react-icons/fa";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Footer from "../../components/footer/Footer";
import { useShopingCardContext } from "../../context/ShppingCartContext";
function Cart() {

  const {cartItems , CartQty} = useShopingCardContext()

  return (
    <div>
      <section className="bg-blue-three dark:bg-bg">
        <Head />
        <Navbar />
      </section>
      <div className="cart-container w-full h-auto">
        <div className="cart grid grid-cols-12 gap-2  w-10/12 max-w-[1500px] mx-auto  p-5 mt-24">
          <div className="card-types-container col-span-12  md:col-span-5   h-auto order-2 rounded-sm flex flex-col justify-center items-center gap-5 p-2">
            <div className=" flex flex-row justify-around items-center h-9 w-full">
              <h1 className="dark:text-my-white poppins text-blue-four  ">Cart Details</h1>
              <img className="size-12 md:size-16 cursor-pointer transition-all hover:scale-105" src={logo} alt="logo" />
            </div>
            <div className="card-type flex flex-col justify-start w-full gap-5">
              <h2 className="uppercase dark:text-blue-three poppins text-blue-four sm:text-xl">card types</h2>
              <div className="flex flex-row justify-start gap-3 items-center md:justify-center">
              <FaCcPaypal className="text-blue-three dark:text-my-white size-10 sm:size-14 transition-all hover:cursor-pointer hover:-translate-y-1" />
              <FaCcVisa className="text-blue-three dark:text-my-white size-10 sm:size-14 transition-all hover:cursor-pointer hover:-translate-y-1" />
              </div>
              <div className="flex flex-col gap-5">
                <input required type="text" className="hover:bg-slate-500 rounded-md w-[85%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="CardHoldersName" />
                <input required type="text"  className="hover:bg-slate-500 rounded-md w-[85%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="CardNumber"/>
              </div>
              <div className="flex w-full items-center">
                <input required type="text"className="hover:bg-slate-500 rounded-md w-[40%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="Expirition" />
                <input required type="number" className="hover:bg-slate-500 rounded-md w-[30%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="Cvv"/>
              </div>
              <hr className="my-5 sm:my-10" />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="dark:text-my-white poppins text-blue-four sm:text-2xl">Total : <span>254 $</span></h2>
                <button className="flex justify-center items-center gap-2 transition-all w-[60%] p-2 mt-4 sm:w-[60%] md:w-[50%] bg-blue-100 dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three  rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three" type="submit"><span>CheckOut</span><span><MdKeyboardDoubleArrowRight /></span></button>
            </div>
          </div>
          <div className="cart-items-container col-span-12  md:col-span-7  h-auto rounded-sm p-8  flex flex-col overflow-hidden">
            <Link to='/store' className=" flex flex-row-reverse justify-end items-center gap-2 dark:text-my-white head text-black text-xs sm:text-xl my-5 line-clamp-1">
            <span>Continue Shopping</span>
            <MdOutlineKeyboardDoubleArrowLeft />
            </Link>
            <hr className=" w-full h-auto" />
            <div className=" flex justify-around items-center my-5">
              <h1 className=" dark:text-blue-three poppins text-blck text-xs  sm:text-base md:text-lg line-clamp-1">Shopping Cart</h1>
              <h5 className=" dark:text-blue-three poppins text-blck text-xs  sm:text-base md:text-lg  line-clamp-1">You have {CartQty} items in your cart</h5>
            </div>
           {
            cartItems.map(item =>(
              <CartItem key={item.id}  {...item} />
            ))
           }
        
          </div>
        </div>
      </div>
      <div className="mt-20">
      <Footer />
      </div>
    </div>
  );
}

export default Cart;
