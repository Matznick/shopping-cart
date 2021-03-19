import React, { Component } from "react";
import CartItem from "./CartItem";

// hier methoed einbauen für callback, die ein item hinzufügt. eigentlihc nur ein item in das array concaten. wie geau? erst hoch zu app schicken, dann wieder zu createItems?

class CartItems extends Component {
  calculateTotal = () => {
    let total = this.props.cartItemsList.reduce((acc, curr) => {
      return (
        acc + this.transformItemToProduct(curr).priceInCents * curr.quantity
      );
    }, 0);
    return total;
  };

  transformItemToProduct = (item) => {
    let foundProduct = this.props.availableItems.find(
      (el) => el.id === item.product_id
    );

    let newProduct = {
      name: foundProduct.name,
      priceInCents: foundProduct.priceInCents,
      quantity: item.quantity,
    };

    return newProduct;
  };

  // transformItemsToProducts = () => {
  //   let productsToDisplay = [];
  //   this.props.cartItemsList.map((item) => {
  //     let findProduct = this.props.availableItems.find(
  //       (el) => el.id === item.product_id
  //     );
  //     console.log("findProduct: ", findProduct);
  //     let newProduct = {
  //       name: findProduct.name,
  //       priceInCents: findProduct.priceInCents,
  //       quantity: item.quantity,
  //     };
  //     productsToDisplay = productsToDisplay.concat(newProduct);

  //     return productsToDisplay;
  //   });
  //   console.log(productsToDisplay);
  //   return productsToDisplay;
  // };

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
          {this.props.cartItemsList.map((item, i) => {
            let productTransformed = this.transformItemToProduct(item);
            return (
              <CartItem
                product={productTransformed.name}
                price={productTransformed.priceInCents}
                quantity={productTransformed.quantity}
                key={i}
              />
            );
          })}
          {`${this.calculateTotal() / 100} $`}
        </div>
      </div>
    );
  }
}

export default CartItems;
