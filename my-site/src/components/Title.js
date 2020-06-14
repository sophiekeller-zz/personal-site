import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js";
import NavButton from "../components/WorkSection.js";

export default class Title extends React.Component {
  render() {
      if (this.props.mobile){
          var title_words = "m-title-words"
          var first = "m-first-line"
          var second = "m-second-line"
      }else{
          var title_words = "title-words"
          var first = "first-line"
          var second = "second-line"
      }
    return (
      <div className = "title">
          <div className = {title_words}>{this.props.title}</div>
          <div className = {first}/>
          <div className = {second}/>
      </div>
    );
}
}
