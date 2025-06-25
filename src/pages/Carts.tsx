import { ProductCard, type ProductCardProps } from "../components/ProductCard";

export const Carts = () => {
  const productos = localStorage.getItem("productos");
  const carrito = productos ? JSON.parse(productos) : [];
  console.log(carrito);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {carrito.map((carrito: ProductCardProps) => (
        <div className="max-w-[15.625rem] w-full h-[18.75rem] m-5">
          <ProductCard
            key={carrito.id}
            img={carrito.img}
            title={carrito.title}
            quantity={carrito.quantity}
            price={carrito.price}
            id={carrito.id}
          />
        </div>
      ))}
    </div>
  );
};
