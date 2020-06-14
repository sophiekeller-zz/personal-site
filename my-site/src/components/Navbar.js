import React from "react";
import { screenId } from "../constants.js";

import NavButton from "../components/NavButton.js";
import images from "../assets/images/images.js";

/*
think about how we can make this component better
(look at all the duplicate code and see if we can factor that out!)

you also might want to group About Us, Our Team, and Projects together in a
div so they all
*/
export default class Navbar extends React.Component {
  render() {
      if (this.props.mobile) {
          var navname = "m-nav-container"
          var navcon = "m-navbuttons-container"
      }else{
          var navname = "nav-container"
          var navcon = "navbuttons-container"
      }
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
          pagename={"about"}
          switchPage={() => {
            this.props.switchPage(screenId.about);
          }}
          selected={screenId.about === this.props.selectedId}
        />
        <NavButton
          pagename={"work"}
          switchPage={() => {
            this.props.switchPage(screenId.work);
          }}
          selected={screenId.work === this.props.selectedId}
        />
        <NavButton
          pagename={"interest"}
          switchPage={() => {
            this.props.switchPage(screenId.interest);
          }}
          selected={screenId.interest === this.props.selectedId}
        />
        <NavButton
          pagename={"adventure "}
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
