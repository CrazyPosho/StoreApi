import { ProductCard, type ProductCardProps } from "../components/ProductCard";

export const Carts = () => {
  const productos = localStorage.getItem("productos");
  const carrito = productos ? JSON.parse(productos) : [];
  console.log(productos);
  console.log(carrito);

  return (
    <div>
      {carrito.map((carrito: ProductCardProps) => (
        <ProductCard
          key={carrito.id}
          img={carrito.img}
          title={carrito.title}
          quantity={carrito.quantity}
          price={carrito.price}
          id={carrito.id}
        />
      ))}
    </div>
  );
};
