
import { Iproducts } from '../types/Iproducts'

function ProductsItem({thumbnail , price , title , images}:Iproducts) {
  return (
    <div className='productsItem-container flex flex-col text-center col-span-12 sm:col-span-4 md:col-span-3 border bg-my-white dark:bg-transparent'>
 <div className='product-img w-full h-[70%] p-5 '>
    <img className='w-full h-full rounded-sm' src={images[2]} alt="product" />
 </div>
 <div className='product-desc my-4 text-blue-600'>
<p>{title}</p>
 </div>
 <div className='product-price my-4 text-blue-600'>{price}toman</div>
    </div>
  )
}

export default ProductsItem
