import React from "react";

// import NavButton from "../components/NavButton.js";
import images from "../assets/images/images.js"

/*
think about how we can make this component better
(look at all the duplicate code and see if we can factor that out!)

you also might want to group About Us, Our Team, and Projects together in a
div so they all
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
      </div>
      </div>
      </div>

    );
  }
}

const fblink = "https://www.facebook.com/profile.php?id=100009408231248"
const instalink = "https://www.instagram.com/sophiekeller/"
const linkedlink = "https://www.linkedin.com/in/41414/"
const gitlink = "https://github.com"
