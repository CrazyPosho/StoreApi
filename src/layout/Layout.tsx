import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1"></main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
