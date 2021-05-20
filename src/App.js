import { Route, Switch } from "react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartState from "./context/Cart/CartState";
import About from "./pages/About";

function App() {
  return (
    <>
      <CartState>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </CartState>
    </>
  );
}

export default App;
