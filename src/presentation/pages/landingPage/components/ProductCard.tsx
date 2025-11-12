import { motion } from 'framer-motion';
import { CardProduct } from './Card';
import { MdSearch } from 'react-icons/md';
import { useIntersectionObserver } from '@/presentation/hooks/useIntersectionObserver';

import type { ProductEntity } from '@/features/product/ProductEntity';
import { useProductContext } from '../context/useProductContext';

const buttonItem: { category: string }[] = [
  { category: 'All' },
  { category: 'fruit' },
  { category: 'legume' },
];

export const ProductCardList = () => {
  const bloc = useProductContext();
  const productList: ProductEntity[] | undefined = bloc?.productListFiltered;

  const observerRef = useIntersectionObserver(bloc.fetchProduct, {
    threshold: 0.1,
    rootMargin: '100px',
    enabled: !bloc.hasReachedMax,
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-800">
            Our Fresh Products
          </h2>
          <p className="text-gray-600 mt-2">
            Discover a variety of fresh and organic products from local farmers.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              onChange={(e) => bloc.setSearch(e.target.value)}
              placeholder="Search for your favorite food..."
              className="w-full h-12 pl-12 pr-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
            />
            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
          </div>
          <div className="flex gap-3">
            {buttonItem.map((item, key) => (
              <button
                onClick={() => bloc.setFilterCategory(item.category)}
                key={key}
                className={`px-4 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                  bloc.filterCategory === item.category
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productList.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-2xl font-semibold">
                No products found.
              </p>
            </div>
          ) : (
            productList?.map((item, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: key * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <CardProduct product={item} key={key} />
              </motion.div>
            ))
          )}
        </div>
      </div>
      <div ref={observerRef} className="h-1 w-full" />
    </div>
  );
};
