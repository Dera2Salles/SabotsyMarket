import { useDashboardContext } from '../context/useDashboardContext';
import { AvatarProducer } from './Avatar';

export const NavBar = () => {
  const { userName } = useDashboardContext();
  return (
    <div className="z-50 w-full">
      <div className=" flex flex-row  justify-between">
        <div className="flex flex-row justify-between w-full">
          <div className=" flex flex-row justify-between gap-2">
            <div className="flex font-semibold text-green-700 gap-2 text-2xl justify-center items-center">
              <p className=" text-yellow-500 font-semibold"> Welcome, </p>{' '}
              {userName?.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-5">
            <AvatarProducer />
          </div>
        </div>
      </div>
    </div>
  );
};
