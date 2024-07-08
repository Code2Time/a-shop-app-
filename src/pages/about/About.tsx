import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./About.css";
// import images
import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user3.jpg";
import user4 from "../../assets/img/user4.jpg";
import Head from "../../components/Head/Head";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

function About() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div data-aos="zoom-out-up">
          <div className="bg-blue-three dark:bg-bg">
            <Head />
            <Navbar />
          </div>
          <Container>
            <div className="about-container h-auto">
              <div className="about-us text-center w-full mx-auto mt-32 grid grid-cols-12 gap-3">
                <h1 className="col-span-12 border-b-2 border-b-blue-four py-2 text-left  text-black dark:text-blue-three head sm:text-xl md:text-2xl">
                  About our shop
                </h1>
                <div className="col-span-12 grid grid-cols-12 gap-5 mt-4">
                  <p className="text-gray-700 dark:text-blue-four poppins text-justify col-span-12 sm:col-span-7">
                    <span className="hidden md:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos modi facere, tempore id,
                      <span className="hidden md:block">
                        {" "}
                        adipisci numquam totam ipsam
                      </span>
                      , voluptatem debitis porro expedita reiciendis?
                    </span>{" "}
                    <span className="hidden md:block">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos modi facere, tempore id, adipisci numquam totam ipsam,
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
              <div className=" my-20 md:my-40  grid grid-cols-12 ">
                <h1 className=" my-5 col-span-12 text-black dark:text-blue-three head sm:text-xl md:text-2xl text-center uppercase">
                  our team!
                </h1>
                <div className="col-span-12 sm:col-span-6 md:col-span-3   shadow-sm shadow-blue-three cursor-pointer  rounded-full overflow-hidden   dark:bg-transparent size-32 mx-auto sm:size-40  md:size-60">
                  <div className="user-container w-full h-full rounded-sm overflow-hidden relative ">
                    <div className="user-img w-full h-full">
                      <img
                        className="w-full h-full"
                        src={user1}
                        alt="user-item"
                      />
                    </div>
                    <div className="user-info  flex flex-col justify-center items-center absolute z-10 m-0 inset-0  text-center">
                      <h1 className="hidden  head user-title uppercase text-2xl text-blue-four ">
                        Henry
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3   shadow-sm shadow-blue-three cursor-pointer  rounded-full overflow-hidden   dark:bg-transparent size-32 mx-auto sm:size-40  md:size-60">
                  <div className="user-container w-full h-full rounded-sm overflow-hidden relative ">
                    <div className="user-img w-full h-full">
                      <img
                        className="w-full h-full"
                        src={user2}
                        alt="user-item"
                      />
                    </div>
                    <div className="user-info  flex flex-col justify-center items-center absolute z-10 m-0 inset-0  text-center">
                      <h1 className="hidden  head user-title uppercase text-2xl text-blue-four ">
                        Oliver
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3   shadow-sm shadow-blue-three cursor-pointer  rounded-full overflow-hidden   dark:bg-transparent size-32 mx-auto sm:size-40  md:size-60">
                  <div className="user-container w-full h-full rounded-sm overflow-hidden relative ">
                    <div className="user-img w-full h-full">
                      <img
                        className="w-full h-full"
                        src={user3}
                        alt="user-item"
                      />
                    </div>
                    <div className="user-info  flex flex-col justify-center items-center absolute z-10 m-0 inset-0  text-center">
                      <h1 className="hidden  head user-title uppercase text-2xl text-blue-four ">
                        Arthur
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-6 md:col-span-3   shadow-sm shadow-blue-three cursor-pointer  rounded-full overflow-hidden   dark:bg-transparent size-32 mx-auto sm:size-40  md:size-60">
                  <div className="user-container w-full h-full rounded-sm overflow-hidden relative ">
                    <div className="user-img w-full h-full">
                      <img
                        className="w-full h-full"
                        src={user4}
                        alt="user-item"
                      />
                    </div>
                    <div className="user-info  flex flex-col justify-center items-center absolute z-10 m-0 inset-0  text-center">
                      <h1 className="hidden  head user-title uppercase text-2xl text-blue-four ">
                        Jack
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default About;
