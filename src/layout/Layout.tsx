import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProp {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-1 overflow-y-auto pt-16 pb-12 flex justify-center">
        {/* Aquí aplicamos el ancho deseado al contenedor del contenido */}
        <div className="w-[70%] md:w-[75%] lg:w-[80%] max-w-screen-xl mx-auto p-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

/*
Cambios realizados:
1.  **Eliminación de clases en el div principal:** Se eliminaron `w-[80%]`, `justify-center` y `items-center` del div raíz.
    * **Razón del cambio:** El div raíz (`<div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">`) debe ocupar todo el ancho disponible para que sus hijos (`Header`, `main`, `Footer`) se comporten correctamente y el diseño sea responsive. Centrar o limitar el ancho del contenedor padre no es la forma correcta de centrar el contenido interno.
2.  **Adición de `flex` y `justify-center` al `main`:** Se agregaron las clases `flex` y `justify-center` al elemento `<main>`.
    * **Razón del cambio:** Esto permite que el contenido dentro del `main` (específicamente el `div` que envuelve los `children`) se pueda centrar horizontalmente dentro del espacio disponible del `main`.
3.  **Ajuste del ancho del div contenedor de `children`:** Se modificaron las clases del `div` que envuelve los `children` de `container mx-auto p-4` a `w-[70%] md:w-[75%] lg:w-[80%] max-w-screen-xl mx-auto p-4`.
    * **Razón del cambio:** Esta es la parte clave. En lugar de depender de la clase `container` de Tailwind (que tiene un ancho fijo basado en breakpoints o un `max-width`), ahora estamos definiendo explícitamente que este `div` ocupe entre el 70% y el 80% del ancho de su padre (`main`).
        * `w-[70%]`: Establece un ancho inicial del 70%.
        * `md:w-[75%]`: En pantallas medianas y más grandes, el ancho será del 75%.
        * `lg:w-[80%]`: En pantallas grandes y más grandes, el ancho será del 80%.
        * `max-w-screen-xl`: Se agregó un `max-width` para asegurar que en pantallas muy grandes, el contenido no se estire demasiado y siga siendo legible, limitándolo a un ancho máximo razonable (equivalente a `1280px` en Tailwind por defecto).
        * `mx-auto`: Centra este div horizontalmente dentro del `main` (gracias a que `main` es `flex justify-center`).
    * **Problema que soluciona:** El problema original era que el `div` principal estaba intentando controlar el ancho del contenido, pero el `container` interno no estaba siendo ajustado al porcentaje deseado, o el `container` de Tailwind con su `max-width` predeterminado no permitía el control porcentual fino que buscabas. Este cambio asegura que solo el área de contenido (`children`) respete el porcentaje de ancho deseado y que esté correctamente centrado.
*/
