import { useEffect, useState } from "react";
import type { Product } from "../types";
import { getProductById } from "../services/api";

export const useGetProduct = (productId: number) => {

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    if (productId) {
      setLoading(true);
      getProductById(productId)
        .then((data) => setProduct(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [productId]);

  return {
    loading,
    product,
    error,
  };
};
