export const Footer = () => {
  const date: Date = new Date();
  return (
    <footer
      className="
        dark:bg-black/90 dark:text-white bg-white/90 text-black text-center p-2 font-extralight w-full text-xl
        border-t border-black fixed bottom-0 left-0 h-12 z-50
      "
    >
      <p>David Hernandez ©{date.getFullYear()}</p>
    </footer>
  );
};
