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
    cartItemsList: [],
  };

  async componentDidMount() {
    const responseProducts = await fetch("http://localhost:8082/api/products");
    const jsonProducts = await responseProducts.json();
    this.setState({ availableItems: jsonProducts });
    const responseCartItems = await fetch("http://localhost:8082/api/items");
    const jsonCartItems = await responseCartItems.json();
    this.setState({ cartItemsList: jsonCartItems });
  }

  // addItem = (itemToAdd) => {
  //   itemToAdd = {
  //     id: this.state.cartItemsList.length + 1,
  //     product: itemToAdd.product,
  //     quantity: itemToAdd.quantity,
  //   };
  //   let newList = this.state.cartItemsList.concat(itemToAdd);
  //   this.setState({
  //     cartItemsList: newList,
  //   });
  // };

  postItem = async (itemToPost) => {
    // add id here, bc is unknown to AddItem component
    const item = { ...itemToPost, id: this.state.cartItemsList.length + 1 };
    const response = await fetch("http://localhost:8082/api/items", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const postedItem = await response.json();
    const newItems = [...this.state.cartItemsList, postedItem];
    this.setState({ cartItemsList: newItems });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CartItems
          cartItemsList={this.state.cartItemsList}
          availableItems={this.state.availableItems}
          key={this.state.cartItemsList}
        />
        <AddItem
          availableItems={this.state.availableItems}
          addItemCallback={this.addItem}
          postItem={this.postItem}
        />
        <Footer copyright={"2016"} />
      </div>
    );
  }
}

export default App;
