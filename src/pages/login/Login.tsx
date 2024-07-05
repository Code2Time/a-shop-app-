import "./Login.css";
import Navbar from "../../components/navbar/Navbar";
import Head from "../../components/Head/Head";

function Login() {
  return (
    <div className="login-container w-full h-screen relative">
        <div className="absolute top-48 inset-0"> 
        <div className="wrapper mx-auto ">
        <form action="">
          <h1 className="Lalezar">Login / Sign up</h1>
          <div className="input-box">
            <input
              className="Lamia"
              type="text"
              placeholder="Username"
              required
            />

            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              className="Lamia"
              type="password"
              placeholder="Password"
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="button" className="btn Lamia text-black">
            Login
          </button>
        </form>
      </div>
        </div>
 
    </div>
  );
}

export default Login;
