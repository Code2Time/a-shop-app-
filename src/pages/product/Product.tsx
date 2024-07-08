import { Link, useParams } from "react-router-dom";
import { ProductsData } from "../Store/ProductsData";
import { useEffect, useState } from "react";
import { Iallproducts } from "../../components/types/Iproducts";
import Navbar from "../../components/navbar/Navbar";
import Head from "../../components/Head/Head";
import "./product.css";
import Container from "../../components/container/Container";
import Loading from "../../components/loading/Loading";
import Property from "../../components/property/Property";
import Footer from "../../components/footer/Footer";
import { useShopingCardContext } from "../../context/ShppingCartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const param = useParams<{ id: any }>();
 
  const [products, setProducts] = useState<Iallproducts[]>([]);
  useEffect(() => {
    setProducts(ProductsData);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  let selected = products.filter((item) => item.id == param.id);

  const { HandleIncreaseProductQty, cartItems, CartQty } =
    useShopingCardContext();
  console.log(cartItems);

  const notify = () =>
    toast.success("Successfully added  ", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar:true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
    }); /* notify message */
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <div className="bg-blue-three dark:bg-bg">
            <Head />
            <Navbar />
          </div>
          <Container>
            {selected.map((item) => (
              <div key={item.id}>
                <div className="productInfo-container grid grid-cols-12 h-auto overflow-hidden mt-2 sm:mt-20 gap-4 p-5">
                  <div className="product-info col-span-12 sm:col-span-7 smd:col-span-6 mx-auto  ">
                    <div className="flex flex-col gap-2 p-2 ">
                      <h1 className="text-blue-three poppins text-xl line-clamp-1">
                        {item.name}
                      </h1>
                      <p className="text-blue-four dark:text-my-white line-clamp-4 sm:line-clamp-3 md:line-clamp-none text-justify md:text-xl mt-5 ">
                        {item.description}
                      </p>
                      <h3 className="flex gap-10 flex-row mx-auto sm:text-xl md:text-2xl mt-5 sm:mt-10 md:mt-14 dark:text-my-white">
                        <span className="text-red-600 line-through">
                          {item.discount} $
                        </span>
                        {item.price} $
                      </h3>
                      <button
                        onClick={() => {
                          HandleIncreaseProductQty(
                            parseInt(param.id as string)
                          );
                          notify();
                        }}
                        className=" mt-2 smd:mt-10  py-1 poppins transition-all w-full bg-slate-300 dark:bg-transparent dark:hover:shadow-md dark:hover:shadow-blue-three text-blue-four hover:text-my-white hover:bg-blue-three dark:hover:bg-transparent    dark:text-blue-three  rounded-md text-xs sm:text-base dark:border-b-blue-two shadow-sm  shadow-blue-three"
                      >
                        Add to cart{" "}
                      </button>
                      <ToastContainer
                        position="bottom-right"
                        autoClose={1000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                    </div>
                  </div>
                  <div className="product-img col-span-12 sm:col-span-5 smd:col-span-6 mx-auto  ">
                    <img
                      src={item.img}
                      alt="product-img"
                      className=" size-60 sm:size-72 md:size-96 cursor-pointer  "
                    />
                  </div>
                </div>
              </div>
            ))}
            <Property />
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Product;
