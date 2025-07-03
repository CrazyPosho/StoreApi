import { useParams } from "wouter";
import { useGetProducts } from "../hooks/useGetProducts";
import { VALID_CATEGORIES } from "../types/index";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types";
import { Link } from "wouter";

export const Home = () => {
  const { category } = useParams();

  const { loading, error, productFiltered } = useGetProducts(category);

  if (category && !VALID_CATEGORIES.includes(category)) {
    return (
      <div className="text-center mt-10 text-2xl dark:text-white">
        Categoría no encontrada 😢
      </div>
    );
  }

  if (loading)
    return <div className="text-center text-2xl">Cargando productos...</div>;

  if (error)
    return (
      <div className="text-center text-red-500">Error cargando productos</div>
    );

  return (
    <div className="text-center p-4">
      <h1 className="border-b-1 border-b-black inline-block font-extralight text-4xl dark:text-white">
        Nuestros Productos
      </h1>

      <div className="flex flex-wrap items-center justify-center">
        {productFiltered.map((product: Product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="max-w-[15.625rem] w-full h-[18.75rem] m-5"
          >
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description=""
              category=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
