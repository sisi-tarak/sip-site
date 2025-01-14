import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    navlinks: [
      {
        id: 1,
        text: "Home",
        path: "/",
        type: "page",
      },
      {
        id: 2,
        text: "About",
        path: "/about",
        type: "page",
      },
      {
        id: 3,
        text: "Services",
        path: "/services",
        type: "page",
      },
      {
        id: 4,
        text: "Contact",
        path: "/contact",
        type: "page",
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
