import type { Product } from "../types";

export const useCost = (carrito: Product[]) => {
  const subTotal = carrito.reduce(
    (acc, product) => acc + (product.price ?? 0),
    0
  );
  const roundedSubTotal = Number(subTotal.toFixed(2));
  const impuesto = Number((roundedSubTotal * 0.1).toFixed(2));
  const envio = carrito.length * 1.5;
  const total = Number((roundedSubTotal + envio + impuesto).toFixed(2));
  return {
    subTotal: roundedSubTotal.toFixed(2),
    envio: envio.toFixed(2),
    impuesto,
    total,
  };
};
