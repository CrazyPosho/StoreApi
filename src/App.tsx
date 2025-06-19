import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Button label="Tocame" size="xl" variant="disabled" />
      <Footer />
    </>
  );
}

export default App;
