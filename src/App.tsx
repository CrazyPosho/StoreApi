import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inputs } from "./components/Inputs";

function App() {
  return (
    <>
      <Header />
      <Inputs
        label="Nombre"
        type="text"
        message="Error al ingresar nombre"
        state="success"
      />
      <Footer />
    </>
  );
}

export default App;
