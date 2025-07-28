import { motion } from "framer-motion";
import { useProductContext } from "../../../hooks/useProduct";
import type { ProductEntity } from "@/domain/Entities/Product";
import { CardProduct } from "./card";
import { MdSearch } from "react-icons/md";

const buttonItem: { category: string }[] = [
  { category: "All" },
  { category: "Rare" },
  { category: "Toxique" },
  { category: "Japon" },
  { category: "gasy" },
];

export const ProductCardList = () => {
  const bloc = useProductContext();
  const productList: ProductEntity[] | undefined = bloc?.productListFiltered;

  return (
    <>
      <div className=" -translate-y-7  bg-zinc-100 z-10 rounded-t-4xl  px-6 py-6 flex flex-col justify-center ">
        <div className=" flex flex-col pb-6 ">
          <div className=" flex flex-row justify-between  items-center gap-4 ">
            <p className="  font-bold text-green-700 lg:text-4xl sm:text-4xl">
              Featured product {bloc.user}
            </p>
            <div className=" translate-x-20  relative flex justify-between items-center w-1/7 ">
              <input
                onChange={(e) => bloc.setSearch(e.target.value)}
                placeholder="Search you favorite food "
                className="  border-green-700 shadow-xl  h-12 w-full pl-4 pr-11 placeholder:text-sm   text-lg border-1 bg-white rounded-4xl focus:outline-none  focus:border-green-700 focus:ring-1 focus:ring-green-900  transition-all duration-300"
              />
              <MdSearch className="absolute right-4  top-1/2 -translate-y-1/2 text-gray-400 text-3xl" />
            </div>
            <div className=" flex flex-row justify-end gap-3 ">
              {buttonItem.map((item, key) => (
                <button
                  onClick={() => bloc.setFilterCategory(item.category)}
                  key={key}
                  className={`flex justify-center border border-green-700 rounded-4xl transition-all duration-100 ${
                    bloc.filterCategory === item.category
                      ? "bg-green-700"
                      : "bg-white hover:bg-green-700"
                  }`}
                >
                  <p
                    className={`font-semibold px-4 py-2 text-xl ${
                      bloc.filterCategory === item.category
                        ? "text-white"
                        : "text-green-700 hover:text-white"
                    }`}
                  >
                    {item.category}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" w-full flex flex-wrap gap-3">
          {productList.length == 0 ? (
            <p className=" text-gray-500 text-6xl flex justify-center w-full py-12 font-semibold">
              No result
            </p>
          ) : null}
          {productList?.map((item, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardProduct product={item} key={key} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
