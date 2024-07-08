import { MdEmail } from "react-icons/md";
import "./Login.css";
import { TiLockClosed } from "react-icons/ti";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div data-aos="fade-up" className="login-page w-full h-screen  ">
            <div className="login-container h-[500px] w-[90%]  sm:w-[70%] md:w-[40%] smd:w-[30%] absolute  inset-0 m-auto  ">
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-my-white poppins">
                    Sign in to your account
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className=" text-sm font-medium leading-6 text-slate-300 flex items-center gap-2"
                      >
                        <span> Email address</span>
                        <MdEmail className="sm:size-3 md:size-4 mb-1" />
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="text-center block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium leading-6 text-slate-300 flex items-center gap-2"
                        >
                          <span> Password</span>
                          <TiLockClosed className="sm:size-4 md:size-5 mb-2" />
                        </label>
                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          autoComplete="current-password"
                          className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 text-center text-sm text-my-white">
                    Not a member?{" "}
                    <a
                      href="#"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Start a 14 day free trial
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
