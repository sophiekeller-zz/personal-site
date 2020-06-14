import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js";

export default class Column extends React.Component {
  render() {
    return (
      <div className = "">
        {this.props.pagename}
      </div>
    );
  }
}
