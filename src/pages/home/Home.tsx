import Head from "../../components/Head/Head"
import Navbar from "../../components/navbar/Navbar"
import Slider from "../../components/slider/Slider"
import Slideshow from "../../components/slideshow/Slideshow"


function Home() {
  return (
    <>
      <section className="bg-blue-three dark:bg-bg">
        <Head />
      </section>
    <Navbar />
    <div className="mt-10 md:mt-0 p-10 md:p-20 w-full h-auto grid grid-cols-12 gap-5">
    <Slider />
    <Slideshow />
    </div>
  
    </>
  )
}

export default Home
