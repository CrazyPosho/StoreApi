import { Switch, Route, useParams } from "wouter";
import { Layout } from "./layout/Layout";
import { ProductDetails } from "./pages/ProductDetails";
import { Index } from "./pages/Index";
import { Suspense } from "react";

function App() {
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

          <Route>
            <h2>404: Página no encontrada</h2>
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
