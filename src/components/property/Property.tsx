import CountUp from "react-countup";

function Property() {
  return (
    <div className="property-section my-36 sm:my-72 sm:mt-28 smd:mt-32">
      <div className="property-container grid grid-cols-12 h-auto w-full gap-3 ">
        <div className="property-item col-span-12 sm:col-span-6 smd:col-span-3  flex flex-col p-12 gap-5 cursor-pointer shadow-sm shadow-blue-four dark:shadow-blue-three  rounded-sm">
          <div className="flex items-center justify-end gap-1">
            <CountUp
              className="text-black dark:text-blue-three text-2xl sm:text-3xl md:text-4xl poppins text-right line-clamp-1 "
              start={0}
              end={+145871}
              duration={2}
            />
            <span className="text-black dark:text-blue-three text-3xl sm:text-4xl">
              +
            </span>
          </div>
          <h2 className="poppins uppercase text-blue-four dark:text-my-white line-clamp-1 ">
            sales and counting
          </h2>
          <img
            className="w-[45%] sm:w-[60%] md:w-[50%] h-4 self-end"
            src="https://adforestpro.scriptsbundle.com/demos/assets/shape/fn-sh1.png"
            alt=""
          />
        </div>
        <div className="property-item col-span-12 sm:col-span-6 smd:col-span-3  flex flex-col p-12 gap-5 cursor-pointer shadow-sm shadow-blue-four dark:shadow-blue-three  rounded-sm">
          <div className="flex items-center justify-end gap-1">
            <CountUp
              className="text-black dark:text-blue-three text-2xl sm:text-3xl md:text-4xl poppins text-right line-clamp-1 "
              start={0}
              end={+5487}
              duration={2}
            />
            <span className="text-black dark:text-blue-three text-3xl sm:text-4xl">
              +
            </span>
          </div>
          <h2 className="poppins uppercase text-blue-four dark:text-my-white line-clamp-1 ">
            REVIEWS & FEEDBACK
          </h2>
          <img
            className="w-[45%] sm:w-[60%] md:w-[50%] h-4 self-end"
            src="https://adforestpro.scriptsbundle.com/demos/assets/shape/fn-sh2.png"
            alt=""
          />
        </div>
        <div className="property-item col-span-12 sm:col-span-6 smd:col-span-3  flex flex-col p-12 gap-5 cursor-pointer shadow-sm shadow-blue-four dark:shadow-blue-three  rounded-sm">
          <div className="flex items-center justify-end gap-1">
            <CountUp
              className="text-black dark:text-blue-three text-2xl sm:text-3xl md:text-4xl poppins text-right line-clamp-1 "
              start={0}
              end={+10000}
              duration={2}
            />
            <span className="text-black dark:text-blue-three text-3xl sm:text-4xl">
              +
            </span>
          </div>
          <h2 className="poppins uppercase text-blue-four dark:text-my-white line-clamp-1 ">
            ACTIVE CUSTOMERS
          </h2>
          <img
            className="w-[45%] sm:w-[60%] md:w-[50%] h-4 self-end"
            src="https://adforestpro.scriptsbundle.com/demos/assets/shape/fn-sh3.png"
            alt=""
          />
        </div>
        <div className="property-item col-span-12 sm:col-span-6 smd:col-span-3  flex flex-col p-12 gap-5 cursor-pointer shadow-sm shadow-blue-four dark:shadow-blue-three  rounded-sm">
          <div className="flex items-center justify-end gap-1">
            <CountUp
              className="text-black dark:text-blue-three text-2xl sm:text-3xl md:text-4xl poppins text-right line-clamp-1 "
              start={0}
              end={+145871}
              duration={2}
            />
            <span className="text-black dark:text-blue-three text-3xl sm:text-4xl">
              +
            </span>
          </div>
          <h2 className="poppins uppercase text-blue-four dark:text-my-white line-clamp-1 ">
            like and comments
          </h2>
          <img
            className="w-[45%] sm:w-[60%] md:w-[50%] h-4 self-end mix-blend-difference dark:mix-blend-color-dodge"
            src="https://adforestpro.scriptsbundle.com/demos/assets/shape/fn-sh1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Property;
