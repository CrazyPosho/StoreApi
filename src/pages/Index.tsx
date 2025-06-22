import { useState, useEffect } from "react";
import { getAllProduct } from "../services/api";
import type { Product } from "../types";
import { ProductCard } from "../components/ProductCard";

export const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllProduct()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Hubo un error al cargar los productos:", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: No se pudieron cargar los productos.</div>;
  }

  return (
    <div className="text-center text-3xl ">
      <h1 className="border-b-1 border-b-black inline-block font-extralight">Nuestros Productos</h1>
      <div className="flex flex-wrap items-center justify-center">
        {products.map((product: Product) => (
          <ProductCard
            img={product.image}
            title={product.title}
            cuantity={0}
            price={0}
          />
        ))}
      </div>
    </div>
  );
};
