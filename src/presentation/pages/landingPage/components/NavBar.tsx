import { MdFlashOn, MdPerson2 } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Description } from './Description';
import { useIntersection } from '../hooks/useIntersection';
import { Button } from '@/components/ui/button';

export const NavBar = () => {
  const { ref, isVisible } = useIntersection();
  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isVisible
            ? 'bg-gradient-to-r from-green-700 to-green-600 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-yellow-400">Sabotsy</span> Market
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-white font-semibold">
                <MdFlashOn className="text-yellow-400 text-2xl" />
                <p>
                  Order now and get it within{' '}
                  <span className="text-yellow-400">15 min!</span>
                </p>
              </div>
              <Link to="/login">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full size-10 cursor-pointer bg-white text-green-700 hover:bg-gray-100 transition-all duration-300"
                >
                  <MdPerson2 className="text-2xl" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Description ref={ref} />
    </>
  );
};
