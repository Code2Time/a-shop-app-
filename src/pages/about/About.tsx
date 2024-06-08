import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="about-container h-auto">
          <div className="about-us text-center w-full mx-auto mt-32 grid grid-cols-12 gap-3">
            <h1 className="col-span-12 border-b-2 border-b-blue-four py-2 text-left  text-black dark:text-blue-three head sm:text-xl md:text-2xl">
              About our shop
            </h1>
            <div className="col-span-12 grid grid-cols-12 gap-5 mt-4">
              <p className="text-gray-700 dark:text-blue-four poppins text-justify col-span-12 sm:col-span-7">
                <span className="hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  modi facere, tempore id,
                  <span className="hidden md:block">
                    {" "}
                    adipisci numquam totam ipsam
                  </span>
                  , voluptatem debitis porro expedita reiciendis?
                </span>{" "}
                <span className="hidden md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  modi facere, tempore id, adipisci numquam totam ipsam,
                  voluptatem debitis porro expedita reiciendis?
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                modi facere, tempore id, adipisci numquam totam ipsam,
                voluptatem debitis porro expedita reiciendis? Porro dolores
                alias aut repellat ut consectetur odio!
              </p>
              <div className="rounded-md overflow-hidden col-span-12 sm:col-span-5 mx-auto">
       
                <img
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0Le3FQxiSuCXz98KO47_PcROMXiW-YEAUg&s"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="user-container my-20 md:my-40  ">
            <h1 className="  text-black dark:text-blue-three head sm:text-xl md:text-2xl text-center uppercase">
              our team!
            </h1>
            <div className="mt-20 md:mt-32 flex justify-center items-center">
              <div className="rounded-full overflow-hidden size-40 md:size-52 m-4 cursor-pointer shadow-blue-four shadow-md transition-all hover:-translate-y-1 hover:shadow-blue-three">
                <img
                  className=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXzncWIjqSHoLi-VPVW-iKESiDUdZ92W-iQ&s"
                  alt=""
                />
                
              </div>
              <div className="rounded-full overflow-hidden size-40 md:size-52 m-4 cursor-pointer shadow-blue-four shadow-md transition-all hover:-translate-y-1 hover:shadow-blue-three">
       
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nzXxkWDJljIkikFE1lEYc1rOiE0sxbQbUg&s"
                  alt=""
                />
              
              </div>
              <div className="rounded-full overflow-hidden size-40 md:size-52 m-4 cursor-pointer shadow-blue-four shadow-md transition-all hover:-translate-y-1 hover:shadow-blue-three">
  
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vsHZkDQZVyzJa4yxLwjSEY_xdSZqyt6r1w&s"
                  alt=""
                />
                
              </div>
              <div className="rounded-full overflow-hidden size-40 md:size-52 m-4 cursor-pointer shadow-blue-four shadow-md transition-all hover:-translate-y-1 hover:shadow-blue-three">
         
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHwxC0JvUeEG2aSM-AQ-bIstt_CkPskKl1Q&s"
                  alt=""
                />
                
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default About;
