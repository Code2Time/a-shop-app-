import './Instagram.css'

function Instagram() {
  return (
    <div className='ins-container rounded-md w-full h-[100px] my-80 flex  justify-between items-center p-4 bg-gradient-to-r from-slate-500 to-slate-300  dark:bg-gradient-to-r dark:from-[#1c1f38] dark:to-white/15 '>
      <div className='text-ins'>
        <h1 className='uppercase poppins dark:text-blue-three'>follow us in instagram!</h1>
      </div>
      <div className='ins-qr'>
        <div className='Qr flex flex-col  justify-center items-center gap-3 md:-ml-52 md:-mt-20 p-2 rounded-lg cursor-pointer'>
            <img className='size-8 sm:size-20 md:size-24 cursor-pointer' src="https://codenight.ir/assets/images/instagramDarkQR.png " alt="" />
           <a href=""> <h3 className='uppercase  text-blue-two text-xs sm:text-base'>myshop</h3></a>
        </div>
      </div>
    </div>
  )
}

export default Instagram
