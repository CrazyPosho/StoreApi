import { Suspense } from "react";
import { Switch, Route } from "wouter";
import { Layout } from "./layout/Layout";
import { ProductDetails } from "./pages/ProductDetails";
import { Home } from "./pages/Home";
import { NoFound } from "./pages/NoFound";
import { Collections } from "./pages/Collections";
import { Carts } from "./pages/Carts";

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

          <Route path="/:category">
            <Suspense>
              <Home />
            </Suspense>
          </Route>

          <Route>
            <NoFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default Router;
