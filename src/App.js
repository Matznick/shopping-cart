import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";

let defaultItems = [
  { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
  { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
  { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
  { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
  { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
  { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
  { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
  { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
  { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 },
];

function App() {
  return (
    <div className="App">
      <Header />
      <CartItems />
      <AddItem defaultItems={defaultItems} />
      <Footer copyright={"2016"} />
    </div>
  );
}

export default App;
