import type { Product } from "../types";

export const useCost = (carrito: Product[]) => {
  const prices = carrito.map((product) => product.price);
  const subTotal = prices.reduce((acc, value) => acc + value, 0);
  const impuesto = Number((subTotal * 0.1).toFixed(2));
  const envio = carrito.length * 1.5;
  const total = subTotal + envio + impuesto;
  return { subTotal, envio, impuesto, total };
};
