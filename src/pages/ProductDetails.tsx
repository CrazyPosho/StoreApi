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
    <div className="h-screen  flex flex-col p-[5%]">
      <main className="flex-1 flex justify-between items-center gap-10 overflow-hidden">
        <section className="max-w-[50%]">
          <h1 className="text-5xl font-bold pb-6 leading-tight dark:text-white">{title}</h1>
          <p className="text-gray-600 leading-relaxed tracking-normal text-justify pb-8 dark:text-white/80">
            {description}
          </p>
          <div className="flex gap-6 items-center justify-center">
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
        </section>

        <figure className="max-w-[40%]">
          <img
            src={image}
            alt="producto"
            className="w-full h-auto object-contain"
          />
        </figure>
      </main>

      <footer className="flex flex-wrap justify-between border-t-2 border-gray-400 pt-4 text-center">
        <div className="w-1/2 md:w-1/4 p-2">
          <p className="font-bold text-xl">
            ${price}
            <br />
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 p-2">
          <p className="font-bold text-xl">{category}</p>
        </div>
      </footer>
    </div>
  );
};
