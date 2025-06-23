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
];
export const Collections = () => {

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="flex gap-8">
        {info.map((info) => (
          <Link key={info.title} href={`/${info.title}`}>
            <CardCategory img={info.img} title={info.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};
