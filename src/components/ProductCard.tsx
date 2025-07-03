import { useLocation } from "wouter";
import { Button } from "./Button";
import { IoCart } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types";

export const ProductCard = ({ image, title, price, id }: Product) => {
  const [location] = useLocation();

  const { addItem, removeItem } = useCartStore();

  const handleAddToCartClick = (event: React.MouseEvent) => {
    event.preventDefault();
    addItem({
      id,
      title,
      price,
      image,
    });
  };

  const handleDeleteFromCartClick = (event: React.MouseEvent) => {
    event.preventDefault();
    removeItem(id);
  };

  return (
    <div className="bg-gray-50 dark:bg-black/90 w-full max-w-[250px] m-5 rounded-xl relative cursor-pointer transition-all flex flex-col justify-between shadow h-[300px] border-1 border-black/50 hover:scale-105  dark:text-white dark:border-white">
      {location === "/cart" ? (

        <Button
          label={<MdDeleteForever />}
          size="xl"
          variant="danger"
          onClick={handleDeleteFromCartClick}
          className="absolute right-3 top-3"
        />
      ) : (
        <Button
          label={<IoCart />}
          size="xl"
          variant="primary"
          onClick={handleAddToCartClick}
          className="absolute right-3 top-3"
        />
      )}

      <div className="flex justify-center items-center h-40 px-4 pt-8">
        <img
          src={image}
          alt="producto"
          className="object-contain h-full w-full max-h-full"
        />
      </div>

      <div className="px-4 py-3 m-auto">
        <h3 className="text-lg font-bold line-clamp-2 ">{title}</h3>
        <p className="text-gray-700 dark:text-white text-base font-light mt-1">
          ${price}
        </p>
      </div>
    </div>
  );
};

/*
### Explicación de los cambios:

#### En `Button.tsx`:

1.  **Nuevas Variantes de Botón**:
    * **Problema a solucionar**: Necesitábamos botones con colores específicos para acciones de "éxito" (verde) y "peligro" (rojo) que fueran reutilizables.
    * **Cambio realizado**:
        * En la interfaz `ButtonProps`, se expandió el tipo `variant` para incluir `"success" | "danger"`.
        * En el objeto `variantClasses`, se agregaron las claves `success` y `danger` con sus respectivas clases de Tailwind CSS para los colores de fondo, efectos `hover`/`active` y modo oscuro. Esto mantiene toda la lógica de estilos dentro del componente `Button`, promoviendo la reutilización y un código más limpio.

#### En `ProductCard.tsx`:

1.  **Aplicación Condicional de Variantes**:
    * **Problema a solucionar**: El botón en la tarjeta de producto debía cambiar de color según la página en la que se encontrara el usuario.
    * **Cambio realizado**:
        * Para el botón que aparece cuando `location === "/cart"`, se añadió la prop `variant="danger"`. Esto aplica los estilos rojos que definimos en el componente `Button`.
        * Para el botón que aparece en el resto de las páginas, se añadió la prop `variant="success"`. Esto aplica los estilos verdes correspondientes.
    * **Beneficio**: Este enfoque es declarativo y fácil de leer. En lugar de pasar clases de CSS complejas, simplemente le dices al botón "quiero que seas de tipo 'danger' o 'success'", y el componente `Button` se encarga del resto.
*/
