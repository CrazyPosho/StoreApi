import { Button } from "./Button";
import { CiHeart } from "react-icons/ci";

interface ProductCard {
  img: string;
  title: string;
  cuantity: number;
  price: number;
}

export const ProductCard = ({ img, title, cuantity, price }: ProductCard) => {
  return (
    <div className="bg-gray-100 w-full max-w-[250px] m-5 rounded-xl relative cursor-pointer active:scale-95 transition-all flex flex-col justify-between shadow h-[300px] border-1 border-black/50 hover:scale-105">
      <p className="text-white bg-black text-xs px-2 py-1 rounded-full absolute top-3 left-3">
        +{cuantity}
      </p>

      <Button
        label={<CiHeart />}
        size="xl"
        className="absolute right-3 top-3"
      />

      <div className="flex justify-center items-center h-40 px-4 pt-8">
        <img
          src={img}
          alt="producto"
          className="object-contain h-full w-full max-h-full"
        />
      </div>

      <div className="px-4 py-3 m-auto">
        <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
        <p className="text-gray-700 text-base font-light mt-1">${price}</p>
      </div>
    </div>
  );
};
