import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProp {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black/90">
      <Header />

      <main className="flex-1 overflow-y-auto py-10 ">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] max-w-screen-xl mx-auto p-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
