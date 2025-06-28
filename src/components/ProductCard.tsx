// src/components/ProductCard.tsx
import { useLocation } from "wouter";
import { Button } from "./Button";
import { IoCart } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types";

export const ProductCard = ({ image, title, price, id }: Product) => {
  const [location] = useLocation();

  const { addItem, removeItem } = useCartStore();

  const handleAddToCartClick = (event: React.MouseEvent) => {
    event.preventDefault();
    addItem({
      id,
      title,
      price,
      image,
    });
  };

  const handleDeleteFromCartClick = (event: React.MouseEvent) => {
    event.preventDefault();
    removeItem(id);
  };

  return (
    <div className="bg-gray-100 w-full max-w-[250px] m-5 rounded-xl relative cursor-pointer transition-all flex flex-col justify-between shadow h-[300px] border-1 border-black/50 hover:scale-105">
      {location === "/cart" ? (
        <Button
          label={<MdDeleteForever />}
          size="xl"
          onClick={handleDeleteFromCartClick}
          className="absolute right-3 top-3"
        />
      ) : (
        <Button
          label={<IoCart />}
          size="xl"
          onClick={handleAddToCartClick}
          className="absolute right-3 top-3"
        />
      )}

      <div className="flex justify-center items-center h-40 px-4 pt-8">
        <img
          src={image}
          alt="producto"
          className="object-contain h-full w-full max-h-full"
        />
      </div>

      <div className="px-4 py-3 m-auto">
        <h3 className="text-lg font-bold line-clamp-2 ">{title}</h3>
        <p className="text-gray-700 text-base font-light mt-1">${price}</p>
      </div>
    </div>
  );
};
