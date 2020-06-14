import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js";
import NavButton from "../components/WorkSection.js";

export default class WorkSection extends React.Component {
  render() {
      if (this.props.mobile) {
          var work_section = "m-work-section"
          var work_image_con = "m-work-image-container"
          var work_image = "m-work-image"
          var work_text_cont = "m-work-text-container"
          var work_text = "m-work-text"
          var work_title = "m-work-title"
          var work_org = "m-work-org"
      }else{
          var work_section = "work-section"
          var work_image_con = "work-image-container"
          var work_image = "work-image"
          var work_text_cont = "work-text-container"
          var work_text = "work-text"
          var work_title = "work-title"
          var work_org = "work-org"
      }
    return (
      <div className = {work_section}>
        <div className = {work_image_con}>
            <img className = {work_image} src = {this.props.image} alt = ""/>
        </div>
        <div className = {work_text_cont}>
            <div className = {work_title}>{this.props.title}</div>
            <div className = {work_org}>{this.props.org}</div>
            <div className = {work_text}>{this.props.text}</div>
        </div>
        </div>
    );
}
}
