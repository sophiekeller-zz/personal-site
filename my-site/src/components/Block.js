import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js";

export default class Block extends React.Component {
  render() {
    if (this.props.color == "light"){
        var block = "block-container light";
        var title = "block-title light";
        var description = "block-description light";
    }else{
        var block = "block-container dark";
        var title = "block-title dark";
        var description = "block-description dark";
    }
    if (this.props.mobile) {
        var block_cont = "m-block-content-container"
        var block_image_cont = "m-block-image-container"
        var block_image = "m-block-image"
        block = "m-" + block
    }else{
        var block_cont = "block-content-container"
        var block_image_cont = "block-image-container"
        var block_image = "block-image"

    }
    return (
      <div className = {block}>
        <div className = {block_cont}>
            <div className={title}>{this.props.title}</div>
            <div className={description}>{this.props.description}</div>
            <div className = {block_image_cont}><img className={block_image} src={this.props.image} alt = ""/></div>
        </div>
      </div>
    );
  }
}
