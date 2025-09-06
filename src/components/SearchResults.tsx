import { ProductCard } from "./ProductCard";
import type { Product } from "../types";
import { motion } from "framer-motion";

interface SearchResultsProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 dark:border-blue-400"></div>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
      Buscando productos con IA...
    </p>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-12 text-center"
  >
    <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-6 py-4 rounded-lg max-w-md">
      <p className="font-semibold">¡Oops! Algo salió mal</p>
      <p className="mt-2">{message}</p>
    </div>
  </motion.div>
);

const NoResults = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-12 text-center"
  >
    <div className="text-6xl mb-4">🔍</div>
    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
      No se encontraron productos
    </h3>
    <p className="text-gray-600 dark:text-gray-400">
      Intenta con una búsqueda diferente
    </p>
  </motion.div>
);

const InitialState = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-12 text-center"
  >
    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Búsqueda Inteligente de Productos
    </h3>
    <p className="text-gray-600 dark:text-gray-400 max-w-md">
      Describe los productos que buscas y nuestra IA los encontrará por ti
    </p>
  </motion.div>
);

const ProductGrid = ({ products }: { products: Product[] }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
  >
    {products.map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: index * 0.1,
          ease: "easeOut",
        }}
      >
        <ProductCard {...product} />
      </motion.div>
    ))}
  </motion.div>
);

export const SearchResults = ({
  products,
  isLoading,
  error,
  hasSearched,
}: SearchResultsProps) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!hasSearched) {
    return <InitialState />;
  }

  if (products.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Se encontraron{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            {products.length}
          </span>{" "}
          productos
        </p>
      </motion.div>
      <ProductGrid products={products} />
    </div>
  );
};
