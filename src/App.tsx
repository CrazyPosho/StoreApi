import { Switch, Route } from "wouter";
import { Layout } from "./layout/Layout";
import { Product } from "./pages/Product";
import { Index } from "./pages/Index";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/">
            <Suspense fallback={<div>Cargando productos...</div>}>
              <Index />
            </Suspense>
          </Route>

          <Route path="/product">
            <Product
              name={""}
              description={""}
              sold={""}
              satisfaction={""}
              star={""}
              warranty={""}
              img={"shoes.png"}
            />
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
