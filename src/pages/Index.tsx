import type { Product } from "../types";
import { ProductCard } from "../components/ProductCard";
import { Link, useParams } from "wouter";
import { useFilterProducts } from "../hooks/useFilterProducts";

export const Index = () => {
  const { category } = useParams();

  const { loading, error, productFiltered } = useFilterProducts(category);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: No se pudieron cargar los productos.</div>;
  }

  return (
    <div className="text-center text-3xl ">
      <h1 className="border-b-1 border-b-black inline-block font-extralight">
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
              img={product.image}
              title={product.title}
              cuantity={0}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
