import { Link } from "wouter";
import { CardCategory } from "../components/CardCategory";

const info = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D",
    title: "jewelery",
  },
  {
    img: "https://images.unsplash.com/photo-1636590416708-68a4867918f1?w=500&auto=format&fit=crop",
    title: "men's clothing",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    title: "electronics",
  },
  {
    img: "https://images.unsplash.com/photo-1592423777039-7be9f340582b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJ3MlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "women's clothing",
  },
];
export const Collections = () => {
  return (
    <div className="text-center  p-4">
      <h1 className="border-b-1 border-b-black inline-block font-extralight mb-8 text-4xl">
        Nuestras colecciones
      </h1>
      {/* Contenedor principal para la cuadrícula */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {info.map((info) => (
            <Link
              key={info.title}
              href={`/${info.title}`}
              className=" w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group cursor-pointer transition-all duration-500 hover:shadow-2xl active:scale-90 ease-linear"
            >
              <CardCategory img={info.img} title={info.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/*
Cambios realizados:
1.  **Eliminación del div con `w-[50%]` y `flex items-center justify-center`:**
    * **Razón del cambio:** El div `<div className="flex items-center justify-center w-[50%]">` estaba limitando el ancho del contenedor de las tarjetas al 50% de la pantalla y centrando ese contenedor en sí, no las tarjetas de forma individual en una cuadrícula adaptable.
    * **Problema que soluciona:** Al eliminarlo, permitimos que el nuevo diseño de cuadrícula ocupe todo el ancho disponible del contenedor padre, facilitando la adaptabilidad.

2.  **Adición de un div contenedor para centrar y limitar el ancho máximo:**
    * **Clases:** `w-full max-w-7xl mx-auto`
    * **Razón del cambio:** Aunque queremos que las tarjetas ocupen el ancho de la pantalla, en pantallas muy grandes no queremos que se estiren indefinidamente. Este div actúa como un "wrapper" que ocupa el 100% del ancho disponible (`w-full`) pero con un `max-width-7xl` (aproximadamente 1280px) para mantener un diseño legible y estético en pantallas anchas. `mx-auto` lo centra horizontalmente.
    * **Problema que soluciona:** Evita que las tarjetas se vean demasiado grandes o dispersas en monitores de alta resolución.

3.  **Implementación de diseño de cuadrícula (Grid):**
    * **Clases:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`
    * **Razón del cambio:** Este es el cambio principal para la adaptabilidad.
        * `grid`: Habilita el comportamiento de cuadrícula.
        * `grid-cols-1`: Por defecto (en pantallas pequeñas), cada tarjeta ocupará su propia columna, es decir, una tarjeta por fila.
        * `sm:grid-cols-2`: En pantallas pequeñas y medianas (`sm` breakpoint, típicamente 640px), las tarjetas se organizarán en 2 columnas.
        * `lg:grid-cols-3`: En pantallas grandes (`lg` breakpoint, típicamente 1024px), las tarjetas se organizarán en 3 columnas.
        * `xl:grid-cols-4`: En pantallas extra grandes (`xl` breakpoint, típicamente 1280px), las tarjetas se organizarán en 4 columnas.
        * `gap-6`: Agrega un espacio uniforme de 24px entre las tarjetas.
    * **Problema que soluciona:** Permite que las tarjetas se ajusten automáticamente al tamaño de la pantalla, distribuyéndose de manera uniforme y ocupando el ancho completo disponible de su contenedor (el `max-w-7xl`).

4.  **Ajuste de la clase `w-96` en el `Link`:**
    * **Clase modificada:** De `w-96` a `w-full`.
    * **Razón del cambio:** La clase `w-96` (que fija el ancho a 24rem o 384px) estaba forzando un ancho fijo para cada tarjeta, impidiendo que se adaptaran al diseño de cuadrícula. Al cambiarlo a `w-full`, la tarjeta ocupará el 100% del ancho disponible en su celda de la cuadrícula, permitiendo la adaptabilidad.
    * **Problema que soluciona:** Asegura que cada tarjeta se ajuste dinámicamente al espacio que le asigne el sistema de cuadrícula.

5.  **Añadir `p-4` al div principal y `mb-8 text-4xl` al `h1`:**
    * **Razón del cambio:** Añadí `p-4` para dar un poco de padding general alrededor de todo el componente `Collections`, mejorando la estética. También aumenté el tamaño del título (`text-4xl`) y añadí un margen inferior (`mb-8`) para una mejor separación visual.
    * **Problema que soluciona:** Mejora la estética y el espaciado del componente en general.
*/
