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

      <main className="flex-1 overflow-y-auto pt-16 pb-12 flex justify-center">
        <div className="w-[70%] md:w-[75%] lg:w-[80%] max-w-screen-xl mx-auto p-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
