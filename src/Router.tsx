import { Switch, Route, useParams } from "wouter";
import { Layout } from "./layout/Layout";
import { ProductDetails } from "./pages/ProductDetails";
import { Index } from "./pages/Index";
import { Suspense } from "react";
import { NoFound } from "./pages/NoFound";
import { Collections } from "./pages/Collections";

function Router() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/">
            <Suspense fallback={<div>Cargando productos...</div>}>
              <Index />
            </Suspense>
          </Route>

          <Route path="/product/:id">
            <ProductDetails />
          </Route>

          <Route path="/collections">
            <Collections />
          </Route>

          <Route path="/:category">
            <Suspense fallback={<div>Cargando productos...</div>}>
              <Index />
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
