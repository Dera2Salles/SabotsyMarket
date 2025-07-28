import { MdFlashOn, MdMenu } from "react-icons/md";
import { CartIconCounter } from "./cartIconCount";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="fixed z-50 w-full">
      <div className=" bg-green-700   flex flex-row  justify-between">
        <div className=" py-3 px-6 flex flex-row justify-between w-full">
          <div className=" flex flex-row justify-between gap-2">
            <div className=" flex justify-center items-center">
              <MdMenu className=" text-white text-2xl hover:text-white/90" />
            </div>
            <div className="flex font-semibold text-white text-xl justify-center items-center">
              <p className=" text-yellow-500 font-semibold"> Sabotsy</p> Market
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center ">
            <div className=" text-white font-semibold flex flex-row gap-1 ">
              <MdFlashOn className=" text-yellow-500 text-xl" />
              <p>Order now and get it within {"   "}</p>{" "}
              <p className=" text-yellow-500 font-semibold"> 15 min!</p>
            </div>
            <CartIconCounter />
            <div className="ml-2.5 flex flex-row gap-2">
              <Link to="/login">
                <button className="text-green-700 h-9 py-2 px-4 rounded-lg font-semibold flex justify-center items-center bg-white hover:bg-white/90  active:scale-105">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
