import React, { Component } from "react";

class AddItem extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    // additem to list with parent method callback
    console.log("from handleSubmit: ", this.props.defaultItems);
    let productToAdd = this.props.defaultItems.filter(
      //(el) => console.log("el is: " + el)
      (el) => el.name === this.state.product_name
    );
    const itemToAdd = { product: productToAdd, quantity: this.state.quantity };
    console.log("from handelSubmit: itemToAdd", itemToAdd);
    return itemToAdd;
    // kein return, hier callback! mehtode für callback fehlt noch
  };

  handleChange = (e) => {
    console.log("from handleChange e.target.name: ", e.target.name);
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Quantity:
          <p>
            <input type="text" onChange={this.handleChange} name="quantity" />
          </p>
        </label>
        <div>
          <label>
            Products:
            <p>
              <select onChange={this.handleChange} name="product_name">
                {this.props.defaultItems.map((el) => (
                  <option value={el.name}>{el.name}</option>
                ))}
              </select>
            </p>
          </label>
        </div>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}

export default AddItem;
