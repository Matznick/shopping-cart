import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          &copy; {this.props.copyright}
        </a>
      </nav>
    );
  }
}

export default Footer;
