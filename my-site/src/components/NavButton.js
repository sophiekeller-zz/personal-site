import React from "react";

/*
* Navbutton component is used by Navbar component to generate individual
* buttons for each page
*
* Props:
*     pageName: title of page button corresponds to, string
*     switchPage: function to call when clicked (to switch page)
*     selected: whether or not button's page is selected, bool
*/
export default class NavButton extends React.Component {
  render() {
    return (
      <div
        className={this.props.selected ? "nav-button-selected" : "nav-button"}
        onClick={() => this.props.switchPage()}
      >
        {this.props.pageName}
      </div>
    );
  }
}
