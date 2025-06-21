import { Switch, Route } from "wouter";
import { Layout } from "./layout/Layout";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
      <Switch>
        <Layout>
          <Switch>
            <Route path="/product">
              <Product
                name={"Grasita Premium"}
                description={""}
                sold={""}
                satisfaction={""}
                star={""}
                warranty={""}
                img={"shoes.png"}
              />
            </Route>
          </Switch>
        </Layout>
      </Switch>
    </>
  );
}
export default App;
