import { FaShoppingCart } from "react-icons/fa";
import { useChangeMode } from "../hooks/useChangeMode";
import { ChangeModeButton } from "../components/ChangeModeButton";
import { Link } from "wouter";
import { useCartStore } from "../store/cartStore";

export const Header = () => {
  const { toggleTheme, theme } = useChangeMode();
  const { items: carrito } = useCartStore();

  return (
    <>
      <div
        className="
          dark:bg-black/90 dark:text-white bg-white/90 text-black
          p-2 font-extralight w-full flex justify-between items-center
          text-xl border-b border-black fixed top-0 left-0 h-16 z-50
        "
      >
        <h3
          className="
            bg-gradient-to-r from-black via-gray-200 to-black
            text-transparent bg-clip-text
            bg-[length:200%_auto] animate-gradient-pan"
        >
          PoshitoStore
        </h3>
        <div className="flex gap-8">
          <Link
            href="/"
            className="hover:scale-125 duration-300 transition-transform "
          >
            Shop
          </Link>
          <Link
            href="/collections"
            className="hover:scale-125 duration-300 transition-transform"
          >
            Collections
          </Link>
          <Link
            href="explore"
            className="hover:scale-125 duration-300 transition-transform"
          >
            Explore
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/cart">
            <div className="flex items-center justify-center gap-2 cursor-pointer hover:scale-125 transition-transform relative">
              <div
                className="text-sm absolute p-1 rounded-full bg-blue-600
              bottom-3 left-2 text-white"
              >
                {carrito.length}
              </div>
              <div className="text-2xl">
                {" "}
                <FaShoppingCart />
              </div>
              Cart
            </div>
          </Link>

          <ChangeModeButton
            onClick={toggleTheme}
            isDarkMode={theme === "dark"}
          />
        </div>
      </div>
    </>
  );
};
