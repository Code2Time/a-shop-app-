// import { useEffect } from "react"
import Head from "../../components/Head/Head"
import Container from "../../components/container/Container"
import Navbar from "../../components/navbar/Navbar"
import Slider from "../../components/slider/Slider"
import Slideshow from "../../components/slideshow/Slideshow"
// import axios from "axios"


function Home() {

// useEffect(()=>{
// axios.get('https://api.escuelajs.co/api/v1/categories')
// // .then(res => setCategory(res.data))
// .then(res => console.log(res.data))
// },[])

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <section className="bg-blue-three dark:bg-bg">
        <Head />
      </section>
    <Navbar />
    <Container>
    <div className="mt-10 h-[500px]  w-full  grid grid-cols-12 gap-5 bg-[#edf2f7] dark:bg-bg ">
    <Slider />
    <Slideshow />
    </div>
    </Container>
    </div>
  )
}

export default Home
