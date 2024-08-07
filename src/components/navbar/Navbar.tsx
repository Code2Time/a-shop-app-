import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  MdHome,
  MdOutlinePersonOutline,
  MdOutlineShoppingCart,
} from "react-icons/md";
import "./Navbar.css";
import { FaReact, FaStore } from "react-icons/fa";
import { useShopingCardContext } from "../../context/ShppingCartContext";

function Navbar() {
  const { CartQty } = useShopingCardContext();

  return (
    <>
      <Disclosure
        dir="rtl"
        id="nav-container"
        as="nav"
        className=" top-0 bg-blue-three dark:bg-bg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 ">
                      <NavLink
                        to="/login"
                        className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                      >
                        <span>Login</span>
                        <MdOutlinePersonOutline />
                      </NavLink>
                      <div className="relative">
                        <NavLink
                          to="/cart"
                          className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                        >
                          <span>Cart</span>
                          <MdOutlineShoppingCart />
                          {CartQty !== 0 ? (
                            <span className="show-cartqty z-10 absolute order-3 w-3 h-3 rounded-full bg-red-600 text-white text-center text-[7px] -top-1 -left-1">
                              {CartQty}
                            </span>
                          ) : (
                            ""
                          )}
                        </NavLink>
                      </div>
                      <NavLink
                        to="/"
                        className="text-blue-one dark:text-blue-two  dark:hover:text-blue-three hover:text-my-white   px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                      >
                        <span>Home</span>
                        <MdHome />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <FaReact
                        size={22}
                        className="relative text-blue-900 dark:text-blue-700 cursor-pointer -mx-3 "
                      />
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    ></Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink
                  to="/"
                  className="text-blue-one dark:text-blue-two  dark:hover:text-blue-three hover:text-my-white   px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Home</span>
                  <MdHome />
                </NavLink>
                <NavLink
                  to="/store"
                  className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Store</span>
                  <FaStore />
                </NavLink>
                <NavLink
                  to="/cart"
                  className="text-blue-one dark:text-blue-two dark:hover:text-blue-three  hover:text-my-white    px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                >
                  <span>Cart</span>
                  <MdOutlineShoppingCart />
                </NavLink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
