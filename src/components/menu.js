import React, { Component } from 'react';
export default class Menu extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, event) {
    this.props.onClick(index, event);
  }

  // A function to render all the items in the menu.
  renderItems() {

    // Define the sections.
    const sections = ["Home", "Work", "Skills", "About", "Contact"];

    // Use a map function to iterate over them.
    const menuItems = sections.map((section, index) =>
      <li key={index}
          index={index}
          onClick={this.handleClick.bind(this, index)}
          className={ this.props.activeItem === index ? ("active-item") : ("")}
      >
        {section}
      </li>
    );

    // Return the generated list items in an unordered list.
    return(
      <ul className="menu-items">{menuItems}</ul>
    );
  }

  render() {
    return (
      <div className="menu">
        <div>
        {this.renderItems()}
        </div>
      </div>
    );
  }
}
