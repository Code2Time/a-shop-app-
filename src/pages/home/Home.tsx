import Head from "../../components/Head/Head"
import Darkmode from "../../components/darkmode/Darkmode"
import Navbar from "../../components/navbar/Navbar"


function Home() {
  return (
    <>
      <section className="bg-blue-three dark:bg-bg">
        <Head />
      </section>
    <Navbar />
     <hr />
    <Darkmode />
    </>
  )
}

export default Home
