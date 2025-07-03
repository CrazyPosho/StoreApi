import { Button } from "../components/Button";
import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../types";
import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useParams } from "wouter";
import { useCartStore } from "../store/cartStore";

export const ProductDetails = () => {
  const params = useParams();

  const productId = Number(params?.id);
  const { addItem } = useCartStore();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const handleAddToCartClick = (event: React.MouseEvent) => {
    event.preventDefault();
    addItem({
      id,
      title,
      price,
      image,
    });
  };

  useEffect(() => {
    if (productId) {
      setLoading(true);
      getProductById(productId)
        .then((data) => setProduct(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [productId]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar el producto.</div>;
  if (!product) return <div>Producto no encontrado.</div>;

  const { title, description, image, price, category, id } = product;
  return (
    <div className="flex flex-col p-4">
      <main className="flex-1 flex justify-between items-center gap-10 overflow-hidden">
        <section className="max-w-[50%] ">
          <h1 className="text-5xl font-bold  leading-tight dark:text-white pb-8">
            {title}
          </h1>
          <p className="text-gray-600 leading-relaxed tracking-normal text-justify pb-8 dark:text-white/80">
            {description}
          </p>
          <div className="flex gap-8 items-center ">
            <p className="font-bold text-xl p-2 rounded-xl">
              ${price}
              <br />
            </p>
            {
              <Button
                label={
                  <div className="flex gap-2 justify-center items-center">
                    <FaShoppingCart /> Añadir al carrito
                  </div>
                }
                onClick={handleAddToCartClick}
              />
            }
          </div>
          <p className="font-bold text-xl pt-4  inline-block">{category}</p>
        </section>

        <figure className="max-w-[40%]">
          <img
            src={image}
            alt="producto"
            className="w-full h-auto object-contain"
          />
        </figure>
      </main>
    </div>
  );
};
