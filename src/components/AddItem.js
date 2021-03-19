import React, { Component } from "react";

class AddItem extends Component {
  state = { quantity: 0, product_name: "Mediocre Iron Watch" };

  handleSubmit = (e) => {
    e.preventDefault();

    let productToAdd = this.props.availableItems.filter(
      (el) => el.name === this.state.product_name
    );
    const itemToAdd = {
      product: productToAdd[0],
      quantity: this.state.quantity,
    };

    // this.props.addItemCallback(itemToAdd);

    const itemToPost = {
      product_id: itemToAdd.product.id,
      quantity: itemToAdd.quantity,
      // id: null,
    };
    this.props.postItem(itemToPost);
  };

  handleChange = (e) => {
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
