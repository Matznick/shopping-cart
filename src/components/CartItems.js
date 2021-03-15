import React, { Component } from "react";
import CartItem from "./CartItem";

// hier methoed einbauen für callback, die ein item hinzufügt. eigentlihc nur ein item in das array concaten. wie geau? erst hoch zu app schicken, dann wieder zu createItems?

class CartItems extends Component {
  calculateTotal = () => {
    let total = this.props.cartItemsList.reduce((acc, curr) => {
      console.log(
        "acc: ",
        acc,
        " list: ",
        this.props.cartItemsList,
        " curr: ",
        curr.product.priceInCents,
        curr.quantity
      );
      return acc + curr.product.priceInCents * curr.quantity;
    }, 0);
    return total;
  };

  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {this.props.cartItemsList.map((item) => (
            <CartItem
              product={item.product.name}
              price={item.product.priceInCents}
              quantity={item.quantity}
            />
          ))}
          {`${this.calculateTotal() / 100} $`}
        </div>
      </div>
    );
  }
}

export default CartItems;
