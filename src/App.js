import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartItems from "./components/CartItems";
import AddItem from "./components/AddItem";
import { Component } from "react";

//stateful class
class App extends Component {
  state = {
    availableItems: [],
    cartItemsList: [
      {
        id: 1,
        product: { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
        quantity: 1,
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499,
        },
        quantity: 2,
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999,
        },
        quantity: 1,
      },
    ],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/products");
    const json = await response.json();
    this.setState({ availableItems: json });
    console.log("json: ", json);
  }

  addItem = (itemToAdd) => {
    itemToAdd = {
      id: this.state.cartItemsList.length + 1,
      product: itemToAdd.product,
      quantity: itemToAdd.quantity,
    };
    let newList = this.state.cartItemsList.concat(itemToAdd);
    console.log(newList);
    this.setState({
      cartItemsList: newList,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CartItems cartItemsList={this.state.cartItemsList} />
        <AddItem
          availableItems={this.state.availableItems}
          addItemCallback={this.addItem}
        />
        <Footer copyright={"2016"} />
      </div>
    );
  }
}

export default App;
