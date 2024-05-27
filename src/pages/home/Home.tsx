import Head from "../../components/Head/Head"
import Darkmode from "../../components/darkmode/Darkmode"


function Home() {
  return (
    <>
      <section className="bg-blue-three dark:bg-gray-800">
        <Head />
      </section>
     <h1 className="head"> home page</h1>
     <hr />
    <Darkmode />
    </>
  )
}

export default Home
