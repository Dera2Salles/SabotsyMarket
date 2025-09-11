import { useAuthContext } from '../context/useAuthContext';

export const LayoutAnimated = ({ children }: { children: React.ReactNode }) => {
  const { activeSection } = useAuthContext();
  return (
    <div className=" flex flex-row items-center justify-center gap-10 h-full  min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex relative overflow-hidden bg-white w-1/2 rounded-3xl shadow-xl   transform transition-all duration-300 hover:shadow-2xl">
        <div
          className={` z-15 absolute inset-y-0 w-1/2 bg-gradient-to-r from-green-600 to-green-700 transition-all duration-500 ease-in-out ${
            activeSection === 'login' ? 'left-1/2' : 'left-0'
          }`}
        ></div>
        {children}
      </div>
    </div>
  );
};
