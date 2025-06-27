import type { Product } from "../types";
import { ProductCard } from "../components/ProductCard";
import { Link, useParams } from "wouter";
import { useGetProducts } from "../hooks/useGetProducts";

export const Home = () => {
  const { category } = useParams();

  const { loading, error, productFiltered } = useGetProducts(category);

  if (loading) {
    return (
      <div className="text-3xl text-center font-extralight">
        Cargando productos...
      </div>
    );
  }

  if (error) {
    return <div>Error: No se pudieron cargar los productos.</div>;
  }

  return (
    <div className="text-center  p-4">
      <h1 className="border-b-1 border-b-black inline-block font-extralight text-4xl">
        Nuestros Productos
      </h1>

      <div className="flex flex-wrap items-center justify-center">
        {productFiltered.map((product: Product) => (
          <Link
            className="max-w-[15.625rem] w-full h-[18.75rem] m-5"
            key={product.id}
            href={`product/${product.id}`}
          >
            <ProductCard
              id={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
