import { motion } from "framer-motion";

interface CardCategoryProps {
  img: string;
  title: string;
}

export const CardCategory = ({ img, title }: CardCategoryProps) => {
  return (
    <motion.article
      className="group flex flex-col h-96 w-64 cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-zinc-800 dark:border-1 dark:border-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="h-4/5 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex h-1/5 items-center justify-center p-2">
        <h3 className="text-center text-lg font-light text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
    </motion.article>
  );
};
