import { Button } from "../components/Button";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
interface ProductProps {
  name: string;
  description: string;
  sold: string;
  satisfaction: string;
  star: string;
  warranty: string;
  img: string;
}

export const Product = ({
  name,
  description,
  sold,
  satisfaction,
  star,
  warranty,
  img,
}: ProductProps) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col p-[5%]">
      <main className="flex-1 flex justify-between items-center gap-10 overflow-hidden">
        <section className="max-w-[50%]">
          <h1 className="text-5xl font-bold pb-6 leading-tight">{name}</h1>
          <p className="text-gray-600 leading-relaxed tracking-normal text-justify pb-8">
            {description}
          </p>
          <div className="flex gap-6 items-center">
            <Button
              label={
                <div className="flex gap-2 justify-center items-center">
                  <FaShoppingCart /> Añadir al carrito
                </div>
              }
            />
            <Button label={"Comprar ahora"} variant="secundary" />
            <CiHeart className="text-4xl text-gray-700 cursor-pointer" />
          </div>
        </section>

        <figure className="max-w-[40%]">
          <img
            src={img}
            alt="producto"
            className="w-full h-auto object-contain"
          />
        </figure>
      </main>

      <footer className="flex flex-wrap justify-between border-t-2 border-gray-400 pt-4 text-center">
        <div className="w-1/2 md:w-1/4 p-2">
          <p className="font-bold text-xl">
            {sold}k
            <br />
            <span className="font-normal text-gray-600">Sold</span>
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 p-2">
          <p className="font-bold text-xl">
            {satisfaction}%
            <br />
            <span className="font-normal text-gray-600">Satisfaction Rate</span>
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 p-2">
          <p className="font-bold text-xl">
            {star}k
            <br />
            <span className="font-normal text-gray-600">5-Star Reviews</span>
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 p-2">
          <p className="font-bold text-xl">
            {warranty}
            <br />
            <span className="font-normal text-gray-600">Year Warranty</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
