import { GiCommercialAirplane, GiMoebiusStar, GiReturnArrow } from "react-icons/gi";
import "./Exclusivity.css";
import { SiPayoneer } from "react-icons/si";

function Exclusivity() {
  return (
    <div className="grid grid-cols-12   h-auto gap-5    mt-16 sm:mt-32 md:mt-44">
      <div className=" ExclusivityItem-container col-span-12 sm:col-span-6 md:col-span-3 text-center   flex items-center justify-center gap-4 p-1 cursor-pointer">
        <div className="Exclusivity-img">
          <GiCommercialAirplane className="text-black dark:text-my-white size-10"  />
        </div>
        <div className="Exclusivity-info flex flex-col items-center justify-center border-blue-900 dark:border-my-white border-l-2 px-4">
          <h1 className="text-black dark:text-blue-three head">Free home delivery</h1>
          <p className="text-gray-700 dark:text-blue-four poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
        </div>
      </div>
      <div className=" ExclusivityItem-container col-span-12 sm:col-span-6 md:col-span-3 text-center   flex items-center justify-center gap-4 p-1 cursor-pointer">
        <div className="Exclusivity-img">
        <GiMoebiusStar className="text-black dark:text-my-white size-10" />
        </div>
        <div className="Exclusivity-info flex flex-col items-center justify-center border-blue-900 dark:border-my-white border-l-2 px-4">
          <h1 className="text-black dark:text-blue-three head">Quality Products</h1>
          <p className="text-gray-700 dark:text-blue-four poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        </div>
      </div>
      <div className=" ExclusivityItem-container col-span-12 sm:col-span-6 md:col-span-3 text-center   flex items-center justify-center gap-4 p-1 cursor-pointer">
        <div className="Exclusivity-img">
        <GiReturnArrow className="text-black dark:text-my-white size-10" />
        </div>
        <div className="Exclusivity-info flex flex-col items-center justify-center border-blue-900 dark:border-my-white border-l-2 px-4">
          <h1 className="text-black dark:text-blue-three head">3 Days Return</h1>
          <p className="text-gray-700 dark:text-blue-four poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
        </div>
      </div>
      <div className=" ExclusivityItem-container col-span-12 sm:col-span-6 md:col-span-3 text-center   flex items-center justify-center gap-4 p-1 cursor-pointer">
        <div className="Exclusivity-img">
        <SiPayoneer    className="text-black dark:text-my-white size-10"/>
        </div>
        <div className="Exclusivity-info flex flex-col items-center justify-center border-blue-900 dark:border-my-white border-l-2 px-4">
          <h1 className="text-black dark:text-blue-three head">100% orginal</h1>
          <p className="text-gray-700 dark:text-blue-four poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
        </div>
      </div>
    </div>
  );
}

export default Exclusivity;
