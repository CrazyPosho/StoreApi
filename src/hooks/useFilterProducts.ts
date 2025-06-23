import { useEffect, useState } from "react";
import { getAllProduct } from "../services/api";
import type { Product } from "../types";

export function useFilterProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
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

  const productFiltered: Product[] = category
    ? products.filter((product) => product.category === category)
    : products;

  return {
    productFiltered,
    loading,
    error,
  };
}
