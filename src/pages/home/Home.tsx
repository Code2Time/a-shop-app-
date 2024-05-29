
import Head from "../../components/Head/Head"
import Container from "../../components/container/Container"
import Getproducts from "../../components/getproduct/Getproducts"
import Navbar from "../../components/navbar/Navbar"
import Slider from "../../components/slider/Slider"
import Slideshow from "../../components/slideshow/Slideshow"



function Home() {



  return (
    <div data-aos="fade-up" data-aos-duration="900">
      <section className="bg-blue-three dark:bg-bg">
        <Head />
      </section>
    <Navbar />
    <Container>
    <div className="mt-10 h-[500px]  w-full  grid grid-cols-12 gap-5 bg-[#edf2f7] dark:bg-bg ">
    <Slider />
    <Slideshow />
    </div>
    <div className="mt-20 h-autow-full  grid grid-cols-12 gap-5  ">
      <h1 className="text-blue-two col-span-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ullam illum soluta non vero maiores animi, facilis reprehenderit? Repellat cupiditate pariatur voluptate error harum inventore, fugiat aperiam tempore. Deserunt, ad?</h1>
    </div>
    </Container>
    <Getproducts />
    </div>
  )
}

export default Home
