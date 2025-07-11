import { Suspense } from "react";
import { Switch, Route } from "wouter";
import { Layout } from "./layout/Layout";
import { ProductDetails } from "./pages/ProductDetails";
import { Home } from "./pages/Home";
import { Collections } from "./pages/Collections";
import { Carts } from "./pages/Carts";
import { Explore } from "./pages/Explore";
import { ToastContainer } from "react-toastify";
import NoFound from "./pages/NoFound";

function Router() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/">
            <Suspense>
              <Home />
            </Suspense>
          </Route>

          <Route path="/product/:id">
            <ProductDetails />
          </Route>

          <Route path="/collections">
            <Collections />
          </Route>

          <Route path="/cart">
            <Carts />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/:category">
            <Home />
          </Route>

          <Route path="/:rest">
            <NoFound />
          </Route>
        </Switch>
      </Layout>
      <ToastContainer />
    </>
  );
}

export default Router;
