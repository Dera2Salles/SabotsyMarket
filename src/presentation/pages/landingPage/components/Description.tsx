import fond from '@/assets/grocery.jpg';

interface descriptionProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

export const Description: React.FC<descriptionProps> = ({ ref }) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fond})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
          We bring the store <br /> to your door
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up">
          Get organic produce and sustainably sourced groceries delivered at up
          to 4% off grocery.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
          Shop Now
        </button>
      </div>
    </div>
  );
};
