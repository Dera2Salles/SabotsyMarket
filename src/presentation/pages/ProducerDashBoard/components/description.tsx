import fond from "../../../../assets/grocery.jpg";


export const Description = () => {
  return (
    <div className="relative pt-15">
      <div className="flex ">
        <div className="relative  flex h-85 w-full">
          <div className=" h-full absolute z-10 flex-col gap-5 flex justify-center px-6">
            <p className=" text-white font-bold text-4xl ">
              We bring the store <br /> to your door
            </p>
            <p className=" text-white font-medium text-lg ">
              Get organic produce and sustainably sourced <br /> groceries
              delivery at up to 4% off grocery
            </p>
            <button  className=" w-1/2 text-green-700 h-9 py-6 px-12 rounded-lg font-semibold flex justify-center items-center bg-white hover:bg-white/90 active:scale-105">
              About us
            </button>
          </div>
          <img src={fond} className=" w-full object-cover" />
          {/* <div className=" absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/100 to-transparent" /> */}
          <div className=" absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/30 to-transparent " />
        </div>
      </div>
    </div>
  );
};
