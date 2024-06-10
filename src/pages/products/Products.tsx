import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container/Container";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import ProductItem from "../../components/productitem/ProductItem";
import Head from "../../components/Head/Head";
import Darkmode from "../../components/darkmode/Darkmode";
import { ProductsData } from "./ProductsData";
import Footer from "../../components/footer/Footer";

function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div data-aos="fade-up ">
          <div className="bg-blue-three dark:bg-bg">
            <Head />
            <Navbar />
          </div>

          <Container>
            <div className="flex justify-between items-center mt-10">
              <div className="item-1">
                <p className="text-black dark:text-blue-two head  poppins text-xs  ">
                  Free Shipping for{" "}
                  <span className="hidden sm:inline"> Rewards or</span> Orders
                  $75+
                </p>
              </div>
              <div className="item-2  ">
                <Link
                  to="/location"
                  className="flex justify-center items-center gap-1 text-black dark:text-blue-three head underline  text-xs "
                >
                  <IoLocationSharp className="size-4 sm:size-5 md:size-7 hover:text-blue-four" />
                  <h2 className="">
                    <span className="hidden sm:inline-block underline">
                      finde a{" "}
                    </span>
                    store
                  </h2>
                </Link>
              </div>
            </div>
            <div className="products-container grid grid-cols-12 gap1 mt-28 sm:mt-20 gap-4 sm:gap-1">
              <h1 className="poppins  col-span-12 text-xs sm:text-base dark:text-blue-three text-blue-four  my-20 ">
                All products
              </h1>
              {ProductsData.map((item) => (
                <ProductItem key={item.id} {...item} />
              ))}
            </div>
          </Container>
          <div className="mt-20 sm:mt-32 md:mt-44">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
