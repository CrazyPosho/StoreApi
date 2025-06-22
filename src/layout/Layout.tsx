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

      {/* El 'main' es el único que crece y tiene scroll */}
      <main className="flex-1 overflow-y-auto pt-16 pb-12">
        {/* El contenido de la página irá aquí */}
        <div className="container mx-auto p-4">{children}</div>
      </main>

      <Footer />
    </div>
  );
};

{
  /*
// ===================== RESUMEN DE CAMBIOS =====================
//
// 1. AÑADIDO `overflow-y-auto` a `<main>`: Esto asegura que si
//    el contenido es muy largo, el scroll aparezca *únicamente*
//    en esta sección central, no en toda la página.
// 2. CAMBIADO `pt-16` en `<main>`: Se mantiene el padding superior
//    para dejar espacio al header de altura `h-16`.
// 3. AÑADIDO `pb-12` a `<main>`: Se añade un padding inferior
//    para dejar espacio al NUEVO footer fijo de altura `h-12`.
//    Esto evita que el final de tu contenido quede oculto.
// 4. AJUSTE ESTRUCTURAL: El `<footer>` fue movido fuera del `main`
//    a nivel del `Layout` principal. Aunque ambos elementos
//    (Header/Footer) están fijos y su posición en el DOM no
//    afecta su lugar en pantalla, esto es estructuralmente más limpio.
// 5. Se añadió un color de fondo (`bg-gray-50...`) al div
//    principal para un mejor contraste visual.
//
// ==============================================================
*/
}
