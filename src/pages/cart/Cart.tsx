import Head from "../../components/Head/Head";
import Navbar from "../../components/navbar/Navbar";
import logo from '../../assets/img/shop-high-resolution-logo-transparent (1).png'
import { FaCcPaypal, FaCcVisa, FaLongArrowAltRight } from "react-icons/fa";
function Cart() {
  return (
    <div>
      <section className="bg-blue-three dark:bg-bg">
        <Head />
        <Navbar />
      </section>
      <div className="cart-container w-full h-auto">
        <div className="cart grid grid-cols-12 gap-2  w-10/12 max-w-[1500px] mx-auto  p-5 mt-32">
          <div className="card-types-container col-span-12  md:col-span-5 border  h-auto order-2 rounded-sm flex flex-col justify-center items-center gap-5 p-2">
            <div className=" flex flex-row justify-around items-center h-9 w-full">
              <h1 className="dark:text-my-white poppins text-blue-four  ">Cart Details</h1>
              <img className="size-12 md:size-16 cursor-pointer" src={logo} alt="logo" />
            </div>
            <div className="card-type flex flex-col justify-start w-full gap-5">
              <h2 className="uppercase dark:text-blue-three poppins text-blue-four sm:text-xl">card types</h2>
              <div className="flex flex-row justify-start gap-3 items-center md:justify-center">
              <FaCcPaypal className="text-blue-three dark:text-my-white size-10 sm:size-14 transition-all hover:cursor-pointer hover:-translate-y-1" />
              <FaCcVisa className="text-blue-three dark:text-my-white size-10 sm:size-14 transition-all hover:cursor-pointer hover:-translate-y-1" />
              </div>
              <div className="flex flex-col gap-5">
                <input required type="text" className="rounded-md w-[85%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="CardHoldersName" />
                <input required type="text"  className="rounded-md w-[85%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="CardNumber"/>
              </div>
              <div className="flex w-full items-center">
                <input required type="text"className="rounded-md w-[40%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="Expirition" />
                <input required type="number" className="rounded-md w-[30%] mx-auto  focus:outline-none placeholder:text-black placeholder:text-sm poppins bg-slate-400 focus:bg-slate-500 text-left py-1 px-2   hover:cursor-pointer" placeholder="Cvv"/>
              </div>
              <hr />
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="dark:text-my-white poppins text-blue-four text-2xl">Total : <span>254 $</span></h2>
                <button className="flex justify-center items-center gap-2 text-xl dark:text-my-white poppins text-blue-four" type="submit"><span>CheckOut</span><span><FaLongArrowAltRight /></span></button>
            </div>
          </div>
          <div className="cart-items-container col-span-12  md:col-span-7 border h-auto rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
