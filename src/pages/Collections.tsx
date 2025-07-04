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
    <div className="text-center p-4">
      <h1 className="border-b-1 border-b-black inline-block font-extralight mb-8 text-4xl dark:text-white dark:border-b-white">
        Nuestras colecciones
      </h1>
      <div className=" min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {info.map((info) => (
              <Link key={info.title} href={`/${info.title}`} className="  ">
                <CardCategory img={info.img} title={info.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
