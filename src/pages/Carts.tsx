import { ProductCard, type ProductCardProps } from "../components/ProductCard";

export const Carts = () => {
  const productos = localStorage.getItem("productos");
  const carrito = productos ? JSON.parse(productos) : [];

  return (
    <div className="text-center p-4">
      <h1 className="border-b-1 border-b-black inline-block font-extralight mb-8 text-4xl">
        Tu Carrito de Compras
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 max-h-[70vh] overflow-y-auto pr-4">
          <div className="flex flex-wrap items-center justify-center">
            {carrito.map((item: ProductCardProps) => (
              <div
                key={item.id}
                className="max-w-[15.625rem] w-full h-[18.75rem] m-5"
              >
                <ProductCard
                  img={item.img}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 md:sticky md:top-55 flex flex-col justify-center items-center gap-y-5 p-4 bg-white shadow-lg rounded-lg">
          <div>
            <p className="text-xl text-gray-500 font-extralight">
              Subtotal
              <br />
              <span className="text-black">${}</span>
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-500 font-extralight">
              Envío
              <br />
              <span className="text-black">${}</span>
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-500 font-extralight">
              Impuestos
              <br />
              <span className="text-black">${}</span>
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-500 font-extralight">
              Total
              <br />
              <span className="text-black">${}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
Cambios realizados:
1.  **Ajuste del `grid-cols` en el contenedor principal del grid:** Se cambió de `grid-cols-2` a `grid-cols-1 md:grid-cols-3 gap-8 items-start`.
    * **Razón del cambio:** El diseño original de `grid-cols-2` hacía que cada columna ocupara el 50% del ancho, lo cual es demasiado para la columna de precios y limita el espacio para los productos. Al cambiar a `md:grid-cols-3`, dividimos el espacio en 3 partes en pantallas medianas y grandes, permitiendo que la columna de productos ocupe 2 tercios y la de precios 1 tercio, lo cual es una distribución más equilibrada. `grid-cols-1` asegura que en pantallas pequeñas, las secciones se apilen verticalmente. `gap-8` añade un espacio entre las columnas y `items-start` alinea las filas al inicio.
    * **Problema que soluciona:** Mejora la distribución del espacio y la adaptabilidad del layout.

2.  **Modificación del div contenedor de productos:**
    * **Clases añadidas/modificadas:** `md:col-span-2 max-h-[80vh] overflow-y-auto pr-4`.
    * **Razón del cambio:**
        * `md:col-span-2`: Hace que este div ocupe 2 de las 3 columnas disponibles en el grid en pantallas medianas y más grandes.
        * `max-h-[80vh]`: Establece una altura máxima del 80% del "viewport height" (altura de la ventana visible). Esto es crucial para definir cuándo el contenido debe empezar a hacer scroll. Puedes ajustar este valor (`80vh`) según sea necesario para tu diseño.
        * `overflow-y-auto`: Esta clase hace que el contenido de este div muestre una barra de scroll vertical solo si el contenido excede la altura máxima definida.
        * `pr-4`: Añade un padding a la derecha para evitar que el scrollbar se superponga con el contenido de las tarjetas o quede pegado al borde.
    * **Problema que soluciona:** Permite que la lista de productos haga scroll de forma independiente cuando excede una altura específica, manteniendo el resto de la página estática.

3.  **Modificación del div contenedor de precios:**
    * **Clases añadidas/modificadas:** `md:col-span-1 md:sticky md:top-20 flex flex-col justify-center items-center gap-y-5 p-4 bg-white shadow-lg rounded-lg`.
    * **Razón del cambio:**
        * `md:col-span-1`: Hace que este div ocupe 1 de las 3 columnas disponibles en el grid en pantallas medianas y más grandes.
        * `md:sticky`: Esta es la clase clave. Hace que el elemento se "pegue" a una posición específica cuando el usuario hace scroll, pero solo a partir del breakpoint `md`.
        * `md:top-20`: Define la distancia desde la parte superior de la ventana (`20` unidades de Tailwind, que es `5rem` o `80px`) a la que el elemento se "pegará" una vez que su posición original pase ese punto. Puedes ajustar este valor según la altura de tu `Header` o el espacio que desees.
        * `p-4 bg-white shadow-lg rounded-lg`: Estas clases son para mejorar la estética de la sección de precios, dándole un fondo, sombra y bordes redondeados para que se destaque como un panel separado.
    * **Problema que soluciona:** Mantiene la sección de precios visible y fija en la pantalla mientras el usuario navega por los productos, mejorando la experiencia de usuario al tener siempre la información de costos a la vista.

4.  **Uso de `item.id` en la `key` del `map` de `carrito`:**
    * **Cambio:** De `<div className="max-w-[15.625rem] w-full h-[18.75rem] m-5">` a `<div key={item.id} className="max-w-[15.625rem] w-full h-[18.75rem] m-5">`.
    * **Razón del cambio:** La `key` debe ir en el elemento más externo que se está mapeando, que en este caso es el `div` que envuelve cada `ProductCard`. Aunque la `ProductCard` también usa un `key`, es más robusto y correcto que el elemento raíz del `map` tenga su propia `key`.
    * **Problema que soluciona:** Garantiza una renderización eficiente y sin errores en React al trabajar con listas.

Estos cambios te permitirán tener una experiencia de usuario mucho más fluida, donde los usuarios pueden revisar todos sus productos en el carrito sin perder de vista el resumen de su compra.*/
