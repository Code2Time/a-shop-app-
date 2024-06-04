import "./Products.css";
import ProductsItem from "../productsitem/ProductsItem";
import ReactPaginate from "react-paginate";
import { IoArrowRedoOutline, IoArrowUndoOutline } from "react-icons/io5";
import { Idatapaginat, Iproducts } from "../types/Iproducts";
import { useEffect, useState } from "react";
import axios from "axios";





function Products() {

    const[products , setProducts]=useState<Iproducts[]>([])

    const fetchproducts = (pagenumber:number)=>{
     axios.get(`https://api.escuelajs.co/api/v1/products?offset=${pagenumber}&limit=10`)
     .then(res =>setProducts(res.data))
    
    }

  const handlePageClick = (data:Idatapaginat) => {
    let pageNumber = (data.selected + 1)
    fetchproducts(pageNumber)

  };
  // console.log(products)

  useEffect(()=>{
 fetchproducts(0)
  },[])

  return (
  <><div className="grid grid-cols-12 gap-1 mt-32">
  {products.map(product=>(
    <ProductsItem {...product} />
  ))}
    
      <ReactPaginate
        breakLabel="..."
        nextLabel={<IoArrowRedoOutline fontSize={20} />}
        onPageChange={handlePageClick}
        pageCount={5}
        previousLabel={<IoArrowUndoOutline fontSize={20} />}
        containerClassName="paginat-container"
        pageClassName="page-item"
        nextClassName="next-item"
        previousClassName="prev-item"
        pageLinkClassName="page-link"
        nextLinkClassName="next-link"
        previousLinkClassName="prev-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="activeit"
      />
    </div>
    </>
  );
}

export default Products;
