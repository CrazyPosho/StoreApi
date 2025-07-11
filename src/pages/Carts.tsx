import { ProductCard } from "../components/ProductCard";
import { useCost } from "../utils/costCalculate";
import { useCartStore } from "../store/cartStore";
import { useEffect } from "react";

export const Carts = () => {
  const { items: carrito, loadCart } = useCartStore();

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const { subTotal, total, envio, impuesto } = useCost(carrito);

  return (
    <div className="text-center p-4 ">
      <h1 className="border-b-1 border-b-black inline-block font-extralight mb-8 text-4xl dark:text-white dark:border-b-white">
        Tu Carrito de Compras
      </h1>
      <div className=" p-4  min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start w-full max-w-7xl mx-auto">
          <div className="md:col-span-2 max-h-[80vh] overflow-y-auto p-4">
            <div className="flex flex-wrap items-center justify-center">
              {carrito.length === 0 ? (
                <p className="text-xl dark:text-white text-center">
                  Tu carrito está vacío.
                </p>
              ) : (
                carrito.map((item) => (
                  <div
                    key={item.id}
                    className="max-w-[15.625rem] w-full h-[18.75rem] m-5"
                  >
                    <ProductCard
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      id={item.id}
                      description={""}
                      category={""}
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="md:col-span-1 md:sticky md:top-55 flex flex-col justify-center items-center gap-y-5 p-4 text-center">
            <div>
              <p className="text-xl text-gray-500  font-extralight dark:text-white flex gap-x-4">
                Subtotal
                <br />
                <span className="text-black dark:text-white/80">
                  ${subTotal}
                </span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500 font-extralight dark:text-white flex gap-x-4">
                Envío
                <br />
                <span className="text-black dark:text-white/80">${envio}</span>
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500 font-extralight dark:text-white flex gap-x-4">
                Impuestos
                <br />
                <span className="text-black dark:text-white/80">
                  ${impuesto.toFixed(2)}
                </span>{" "}
              </p>
            </div>
            <div>
              <p className="text-xl text-gray-500 font-extralight dark:text-white flex gap-x-4">
                Total
                <br />
                <span className="text-black dark:text-white/80">
                  ${total.toFixed(2)}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
