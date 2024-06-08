import Navbar from "../../components/navbar/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-2">
        <div>
            <h1>our team</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum, eum tempore officiis accusantium quos dignissimos qui, suscipit nam earum sequi ea amet minima natus? Impedit maiores enim dolor omnis!</p>
        </div>
      </div>
    </>
  );
}

export default About;
