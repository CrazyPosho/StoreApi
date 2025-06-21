export const Footer = () => {
  const date: Date = new Date();
  return (
    <p className="dark:bg-black/90 dark:text-white bg-white/90 text-black text-center p-2 font-extralight  w-full text-xl border-t-1 border-black">
      David Hernandez ©{date.getFullYear()}{" "}
    </p>
  );
};
