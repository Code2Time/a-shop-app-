import React from 'react'

function ProductsItem() {
  return (
    <div className='productsItem-container flex flex-col text-center col-span-12 sm:col-span-4 md:col-span-3 border bg-my-white dark:bg-transparent'>
 <div className='product-img w-full h-[70%] p-5 '>
    <img className='w-full h-full rounded-sm' src="https://mahdi-kheibari.github.io/e-shop-react-web-app/static/media/15ef1013dx.8384e3285d9d95ed99e7.jpg" alt="product" />
 </div>
 <div className='product-desc my-4 text-blue-600'>
<p>Lorem, ipsum dolor hexol.</p>
 </div>
 <div className='product-price my-4 text-blue-600'>256/000toman</div>
    </div>
  )
}

export default ProductsItem
