import React from "react";

/*
* Footer component rendered at bottom of App html
*
* Props: none
*/
export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
      <div className = "footer-text">Created By Sophie Keller</div>
      <div className = "footer-logos">
      <div className="icons-container">
        <a href ={linkedlink} target = "_blank">
        <div href ={linkedlink} className = "link social-icon"></div>
        </a>
        <a href ={gitlink} target = "_blank">
        <div className = "git social-icon"></div>
        </a>
        <a href ={fblink} target = "_blank">
        <div className = "face social-icon"></div>
        </a>
        <a href ={instalink} target = "_blank">
        <div className = "insta social-icon"></div>
        </a>
      </div></div></div>
    );
  }
}
//consts for file -> links for social media icons
const fblink = "https://www.facebook.com/profile.php?id=100009408231248"
const instalink = "https://www.instagram.com/sophiekeller/"
const linkedlink = "https://www.linkedin.com/in/41414/"
const gitlink = "https://github.com"
