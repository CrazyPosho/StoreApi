import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProp {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">{children}</main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
