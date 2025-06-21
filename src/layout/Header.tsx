import { FaShoppingCart } from "react-icons/fa";
import { useChangeMode } from "../hooks/ChangeMode";
import { ChangeModeButton } from "../components/ChangeModeButton";
import { Link } from "wouter";


export const Header = () => {
  const { toggleTheme, theme } = useChangeMode();
  return (
    <>
      <div className="dark:bg-black/90 dark:text-white bg-white/90 text-black p-2 font-extralight  w-full  relative flex justify-between text-xl border-b-1 border-black">
        <div>PoshitoStore</div>
        <div className="flex gap-8  ">
          <Link href="/product" className="hover:scale-125 transition-all">
            Shop
          </Link>
          <Link href="#" className="hover:scale-125 transition-all">
            Collections
          </Link>
          <Link href="#" className="hover:scale-125 transition-all">
            Explore
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-2">
            <FaShoppingCart />
            Cart
          </div>
          <ChangeModeButton
            onClick={toggleTheme}
            isDarkMode={theme === "dark"}
          />
        </div>
      </div>
    </>
  );
};
