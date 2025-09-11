import {
  MdArrowLeft,
  MdGroup,
  MdLocationOn,
  MdLock,
  MdPerson2,
  MdPhone,
} from 'react-icons/md';
import { useAuthContext } from '../context/useAuthContext';

export const SignUpSection = () => {
  const { activeSection, setActiveSection } = useAuthContext();

  return (
    <div
      className={`w-1/2  px-10 py-10 flex flex-col items-center  gap-4 transition-all duration-300 ${
        activeSection === 'signup' ? 'z-10 opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center mb-5">
        <div className="flex relative w-full justify-center">
          <MdArrowLeft
            onClick={() => setActiveSection('login')}
            className=" absolute -left-25 -top-4 text-7xl text-green-700 hover:scale-125 transition-all duration-300"
          />
          <h1 className="text-5xl  font-extrabold text-green-700 mb-2">
            Inscription
          </h1>
        </div>

        <p className="text-lg text-gray-600">
          L'innovation au coeur de votre argent
        </p>
      </div>
      {/* {isVisible && (
       <span className='text-2xl text-green-500 '>{server}</span>
      )}
       {isVisible2 && (
       <span className='text-xl text-red-600 '>{server}</span>
      )} */}

      <div className=" relative w-full ">
        <MdPerson2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          placeholder="Nom"
          className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
      </div>
      <div className=" relative w-full ">
        <MdGroup className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          placeholder="Prénom"
          className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
      </div>
      <div className=" relative w-full ">
        <MdLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          placeholder="Adresse"
          className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
      </div>
      <div className=" relative w-full ">
        <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="number"
          placeholder="Numero de Téléphone"
          className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
      </div>

      <div className=" relative w-full ">
        <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
      </div>
      <div className=" relative w-full ">
        <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

        <input
          type="password"
          placeholder="Entrez de nouveau votre mot de passe"
          className=" pl-10 pr-3 p-y-2 flex flex-1 px-4 py-3 w-full text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
        />
      </div>
      <button
        type="submit"
        className="w-full flex flex-row justify-center px-4 py-4  bg-gradient-to-r from-green-600 to-green-700 text-white text-2xl font-semibold rounded-2xl active:scale-105 hover:from-green-700/90 hover:to-green-800/90  shadow-lg hover:shadow-xl"
      >
        S'inscrire
      </button>
    </div>
  );
};
