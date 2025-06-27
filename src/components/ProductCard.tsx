import { useLocation } from "wouter";
import { Button } from "./Button";
import { IoCart } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

export interface ProductCardProps {
  id: number | string;
  img: string;
  title: string;
  price: number;
}

export const ProductCard = ({ img, title, price, id }: ProductCardProps) => {
  const location = useLocation()[0];

  const handleAddCart = (event: React.MouseEvent) => {
    event.preventDefault();
    const storedCart = localStorage.getItem("productos");
    const cart: ProductCardProps[] = storedCart ? JSON.parse(storedCart) : [];
    const productExist = cart.find((item) => item.id === id);
    if (productExist) {
      alert("Producto ya existe al carrito");
      return;
    }

    cart.push({ id, img, title, price });

    localStorage.setItem("productos", JSON.stringify(cart));
    alert("Producto añadido al carrito");
  };

  const handleDeleteCart = (event: React.MouseEvent) => {
    event.preventDefault();
    const storedCart = localStorage.getItem("productos");
    const carts: ProductCardProps[] = storedCart ? JSON.parse(storedCart) : [];
    const cart = carts.filter((item) => item.id !== id);

    localStorage.setItem("productos", JSON.stringify(cart));
    alert("Producto eliminado al carrito");
  };

  return (
    <div className="bg-gray-100 w-full max-w-[250px] m-5 rounded-xl relative cursor-pointer  transition-all flex flex-col justify-between shadow h-[300px] border-1 border-black/50 hover:scale-105">
      {location === "/cart" ? (
        <Button
          label={<MdDeleteForever />}
          size="xl"
          onClick={handleDeleteCart}
          className="absolute right-3 top-3"
        />
      ) : (
        <Button
          label={<IoCart />}
          size="xl"
          onClick={handleAddCart}
          className="absolute right-3 top-3"
        />
      )}

      <div className="flex justify-center items-center h-40 px-4 pt-8">
        <img
          src={img}
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
