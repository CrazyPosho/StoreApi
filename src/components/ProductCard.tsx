import { Button } from "./Button";

import { CiHeart } from "react-icons/ci";

interface ProductCard {
  img: string;
  title: string;
  description: string;
  cuantity: number;
  price: number;
}

export const ProductCard = ({
  img,
  title,
  description,
  cuantity,
  price,
}: ProductCard) => {
  return (
    <div className="bg-gray-100 w-80 h-90 m-5 rounded-xl relative cursor-pointer active:scale-95 transition-all">
      <p className="text-gray-100 bg-black rounded-full text-center w-[10%] absolute  top-5 left-6">
        +{cuantity}
      </p>
      <Button label={<CiHeart />} size="xl" className="absolute right-0" />

      <div className="flex flex-col">
        <figure className="m-5">
          <img src={img} alt="producto" className=" rounded-lg" />
        </figure>
        <div className="pl-8">
          {" "}
          <h3 className="text-xl font-bold pb-2">{title}</h3>
          <p className="text-gray-500 pb-2">{description}</p>
          <p className="font-bold pb-2">${price}</p>
        </div>
      </div>
    </div>
  );
};
