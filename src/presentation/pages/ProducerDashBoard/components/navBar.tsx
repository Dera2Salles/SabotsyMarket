import { AvatarProducer } from "./avatar";
import { useProductContext } from "../../../hooks/useProduct";

export const NavBar = () => {
  const bloc = useProductContext();
  return (
    <div className="fixed z-50 w-full">
      <div className="  bg-green-700 flex flex-row  justify-between">
        <div className=" py-3 px-6 flex flex-row justify-between w-full">
          <div className=" flex flex-row justify-between gap-2">
            <div className=" flex justify-center items-center"></div>

            <div className="flex font-semibold text-white text-2xl justify-center items-center">
              <p className=" text-yellow-500 font-semibold"> Producer</p>{" "}
              DashBoard
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-5 ">
            <p className=" text-white font-semibold text-xl flex flex-row gap-1 ">
              Welcome, {bloc?.user?.nom} ato
            </p>
            <AvatarProducer />
          </div>
        </div>
      </div>
    </div>
  );
};
