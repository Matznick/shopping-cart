import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartItems from "./components/CartItems";

function App() {
  return (
    <div className="App">
      <Header />
      <CartItems />
      <Footer copyright={"2016"} />
    </div>
  );
}

export default App;
