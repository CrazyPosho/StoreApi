interface CardCategoryProps {
  img: string;
  title: string;
}

export const CardCategory = ({ img, title }: CardCategoryProps) => {
  return (
    <>
      <div className="h-4/5 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="h-1/5 flex items-center justify-center p-4">
        <h3 className="text-lg font-extralight text-center text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
    </>
  );
};
