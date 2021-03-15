import React, { Component } from "react";

class AddItem extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from handleSubmit: ", this.props.defaultItems);
    let productToAdd = this.props.defaultItems.filter(
      (el) => el.name === this.state.product_name
    );
    const itemToAdd = {
      product: productToAdd[0],
      quantity: this.state.quantity,
    };
    console.log("from handelSubmit: itemToAdd", itemToAdd);
    this.props.addItemCallback(itemToAdd);
  };

  handleChange = (e) => {
    console.log("from handleChange e.target.name: ", e.target.name);
    console.log("state: ", this.state);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

export default AddItem;
