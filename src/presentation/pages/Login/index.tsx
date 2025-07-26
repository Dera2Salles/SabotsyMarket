import { MdLock, MdPhone } from "react-icons/md";

export const Login = () => {
  return (
    <div className=" flex flex-row items-center justify-center gap-10 h-full  min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-1/3  px-10 py-10 flex flex-col items-center  gap-4 bg-white rounded-3xl shadow-xl   transform transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-5">
          <div className="text-5xl font-semibold text-green-700 mb-2 flex ">
            <p className=" text-yellow-500 font-semibold"> Sabotsy</p> Market
          </div>
          <p className="text-lg text-gray-600">
            We bring the store to your door
          </p>
        </div>
        {/* {isVisible && (
          <span className="text-sm text-red-600 ">{serverResponse}</span>
        )} */}

        <div className="relative w-full ">
          <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

          <input
            type="number"
            // onChange={(e) => setNumberPhone(e.target.value)}
            placeholder="Numero de Téléphone"
            className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-gren-600 focus:ring-2 focus:ring-green-700 transition-all duration-300"
          />
        </div>
        <div className=" relative w-full ">
          <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

          <input
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Mot de passe"
            className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-700 transition-all duration-300"
          />
        </div>
        <button
          //   onClick={handleSubmit}
          type="submit"
          className="w-full flex flex-row justify-center px-4 py-4  bg-gradient-to-r from-green-600 to-green-700 text-white text-2xl font-semibold rounded-2xl active:scale-101 hover:from-green-700/90 hover:to-green-800/90  shadow-lg hover:shadow-xl"
        >
          Se connecter
        </button>
        <hr className="w-1/2 border-green-700" />
        <span className="text-sm text-green-700 ">Pas encore de compte ?</span>
        <a
          //   onClick={sign}
          className="mt-2 inline-block  text-green-700 hover:underline text-sm "
        >
          Créez un compte
        </a>
      </div>
    </div>
  );
};
