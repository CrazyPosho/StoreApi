import { useLocation } from "wouter";
import { Button } from "./Button";
import { IoCart } from "react-icons/io5";

export interface ProductCardProps {
  id: number | string;
  img: string;
  title: string;
  quantity: number;
  price: number;
}

export const ProductCard = ({
  img,
  title,
  quantity,
  price,
  id,
}: ProductCardProps) => {
  const location = useLocation()[0];

  const products = [
    {
      id,
      img,
      title,
      quantity,
      price,
    },
  ];

  const handleAddCart = (event: React.MouseEvent) => {
    event.preventDefault();
    localStorage.setItem("productos", JSON.stringify(products));
    console.log("Agregado");
  };

  return (
    <div className="bg-gray-100 w-full max-w-[250px] m-5 rounded-xl relative cursor-pointer  transition-all flex flex-col justify-between shadow h-[300px] border-1 border-black/50 hover:scale-105">
      <p className="text-white bg-black text-xs px-2 py-1 rounded-full absolute top-3 left-3">
        +{quantity}
      </p>
      {location !== "/cart" ? (
        <Button
          label={<IoCart />}
          size="xl"
          onClick={handleAddCart}
          className="absolute right-3 top-3"
        />
      ) : (
        ""
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
