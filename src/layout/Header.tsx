import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <div className="dark:bg-black/90 dark:text-white bg-white/90 text-black p-2 font-extralight  w-full  relative flex justify-between text-xl border-b-1 border-black">
        <div>PoshitoStore</div>
        <div className="flex gap-8  ">
          <a href="#" className="hover:scale-125 transition-all">
            Shop
          </a>
          <a href="#" className="hover:scale-125 transition-all">
            Collections
          </a>
          <a href="#" className="hover:scale-125 transition-all">
            Explore
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaShoppingCart />
          Cart
        </div>
      </div>
    </>
  );
};
