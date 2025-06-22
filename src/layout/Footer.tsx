export const Footer = () => {
  const date: Date = new Date();
  return (
    // Se han añadido clases para fijar el footer en la parte inferior.
    <footer
      className="
        dark:bg-black/90 dark:text-white bg-white/90 text-black
        text-center p-2 font-extralight w-full text-xl
        border-t border-black

        fixed bottom-0 left-0      // AÑADIDO: Fija el footer y lo pega abajo a la izquierda.
        h-12                       // AÑADIDO: Altura fija (48px). ¡Importante!
        z-50                       // AÑADIDO: z-index para que esté por encima del contenido.
        flex items-center justify-center // AÑADIDO: Para centrar el texto verticalmente.
      "
    >
      <p>David Hernandez ©{date.getFullYear()}</p>
    </footer>
  );
};

{
  /*
// ===================== RESUMEN DE CAMBIOS =====================
//
// 1. AÑADIDO `fixed bottom-0 left-0`: Saca al footer del flujo
//    normal y lo ancla a la parte inferior de la ventana.
// 2. AÑADIDO `h-12`: Se le dio una altura fija de 48px para que
//    podamos calcular el padding necesario en el `Layout`.
// 3. AÑADIDO `z-50`: Asegura que el footer siempre sea visible
//    por encima del contenido que hace scroll.
// 4. AÑADIDO `flex items-center justify-center`: Centra el
//    contenido del párrafo vertical y horizontalmente dentro
//    de la nueva altura fija.
// 5. Se eliminó el ` ` espacio extra del JSX para mayor limpieza.
//
// ==============================================================
*/
}
