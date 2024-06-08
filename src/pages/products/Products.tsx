import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/container/Container";
import { IoLocationSharp } from "react-icons/io5";

function Products() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="flex justify-between items-center mt-10">
        <div className="item-1"><p className="text-black dark:text-blue-two head  poppins ">Free Shipping for Rewards or Orders $75+</p></div>
        <div className="item-2 flex justify-center items-center gap-2 text-black dark:text-blue-three head underline " >
        <IoLocationSharp className="size-20" />
        <h2>finde a store</h2>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default Products;
