import { MdLock, MdPhone, MdMoney } from "react-icons/md";
import { useProductContext } from "../../../hooks/useProduct";

export const TransfertCard = () => {
  const bloc = useProductContext();
  return (
    <div className=" w-1/2 h-150  px-10 py-10 flex flex-col items-center justify-center  gap-4 bg-white rounded-3xl shadow-xl   transform transition-all duration-300 hover:shadow-2xl">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-purple-900 mb-2">
          Description
        </h1>
      </div>

      <div className="flex flex-row w-full gap-2 justify-center">
        <div className=" relative w-full ">
          <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

          <input
            onChange={(e) => bloc?.setDescription(e.target.value)}
            placeholder="Numero du déstinataire"
            className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
          />
        </div>
        <div className=" relative w-full ">
          <MdMoney className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

          <input
            type="number"
            placeholder="Montant"
            className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-row w-full gap-2">
        <div className=" relative w-full ">
          <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

          <input
            type="password"
            placeholder="Mot de passe"
            className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex flex-row justify-center px-4 py-4  bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-2xl font-semibold rounded-2xl active:scale-105 hover:from-indigo-600 hover:to-purple-600 transform  transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Transférer
      </button>
    </div>
  );
};
