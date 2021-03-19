import React, { Component } from "react";

class AddItem extends Component {
  state = { quantity: 0, product_name: "none" };

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log("from handleSubmit: ", this.props.defaultItems);

    let productToAdd = this.props.availableItems.filter(
      (el) => el.name === this.state.product_name
    );
    const itemToAdd = {
      product: productToAdd[0],
      quantity: this.state.quantity,
    };
    // console.log("from handelSubmit: itemToAdd", itemToAdd);
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
                  {this.props.availableItems.map((el, i) => (
                    <option key={i} value={el.name}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </p>
            </label>
          </div>
          <p>
            <input className="btn btn-primary" type="submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default AddItem;
