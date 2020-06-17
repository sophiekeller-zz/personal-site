import React from "react";

//CONSTANTS
import { screenId } from "../constants.js";
import images from "../assets/images/images.js";

//COMPONENTS
import NavButton from "../components/NavButton.js";

/*
* Navbar component is rendered at the top of App.js html to house
* site navigation
*
* Props:
*     mobile: whether or not screen is mobile, bool
*     switchPage: function to change page given a screenId
*     selectedId: id of current page, string
*/
export default class Navbar extends React.Component {
  render() {
      //change classes to specify mobile/non mobile style
      if (this.props.mobile) {
          var navname = "m-nav-container"
          var navcon = "m-navbuttons-container"
      }else{
          var navname = "nav-container"
          var navcon = "navbuttons-container"
      }
      console.log("mobile:", this.props.mobile);
    return (
        <div className = {navname}>
        <div className = "logo-container">
        <img
            className="logo"
            src = {images.logo}
            alt = {""}/>
        </div>
        <div className = {navcon}>
        <NavButton
          pageName={"about"}
          switchPage={() => {
            this.props.switchPage(screenId.about);
          }}
          selected={screenId.about === this.props.selectedId}
        />
        <NavButton
          pageName={"work"}
          switchPage={() => {
            this.props.switchPage(screenId.work);
          }}
          selected={screenId.work === this.props.selectedId}
        />
        <NavButton
          pageName={"interest"}
          switchPage={() => {
            this.props.switchPage(screenId.interest);
          }}
          selected={screenId.interest === this.props.selectedId}
        />
        <NavButton
          pageName={"adventure "}
          switchPage={() => {
            this.props.switchPage(screenId.travel);
          }}
          selected={screenId.travel === this.props.selectedId}
        />
        </div>
        </div>
    );
  }
}
