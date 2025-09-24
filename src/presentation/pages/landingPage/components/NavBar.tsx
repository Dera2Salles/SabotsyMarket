import { MdFlashOn, MdPerson2 } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Description } from './Description';
import { useIntersection } from '../hooks/useIntersection';
import { Button } from '@/components/ui/button';

export const NavBar = () => {
  const { ref, isVisible } = useIntersection();
  return (
    <>
      <div
        className={`fixed z-100 w-full ${
          isVisible ? ' bg-gradient-to-r from-green-700 to-green-600' : ''
        }`}
      >
        <div className=" flex flex-row  justify-betwee overflow-clip">
          <div className=" py-3 px-6 flex flex-row justify-between z-200 w-full">
            <div className=" flex flex-row justify-between gap-2">
              <div className="flex font-semibold text-white text-xl justify-center items-center">
                <p className=" text-yellow-500 font-semibold"> Sabotsy</p>{' '}
                Market
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center ">
              <div className=" text-white font-semibold md:flex flex-row gap-1 hidden">
                <MdFlashOn className=" text-yellow-500 text-xl" />
                <p>Order now and get it within {'   '}</p>{' '}
                <p className=" text-yellow-500 font-semibold"> 15 min!</p>
              </div>
              <div className="ml-2.5 flex flex-row gap-2">
                <Link to="/login">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full size-10 cursor-pointer border-green-700 hover:border-white"
                  >
                    <MdPerson2 className=" size-5 text-green-700" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description ref={ref} />
    </>
  );
};
