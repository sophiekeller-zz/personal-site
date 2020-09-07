import React from "react";

/*
 * Block components comprise the tiles on the About screenId
 *
 * Props:
 *     mobile: whether or not screen is mobile, bool
 *     color: color of the tile, either "light" or "dark"
 *     title: title of the block, string
 *     description: description of the block, string
 *     image: image to be included in block, image url/string
 */
export default class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }
  render() {
    //set classesNames according to this.props.color
    if (this.props.color == "light") {
      var block = "block-container light";
      var title = "block-title light";
      var description = "block-description light";
    } else {
      var block = "block-container dark";
      var title = "block-title dark";
      var description = "block-description dark";
    }
    if (this.props.mobile) {
      var block_cont = "m-block-content-container";
      var block_image_cont = "m-block-image-container";
      var block_image = "m-block-image";
      block = "m-" + block;
    } else {
      var block_cont = "block-content-container";
      var block_image_cont = "block-image-container";
      var block_image = "block-image";
    }
    return (
      <div
        className={block}
        onMouseEnter={() => {
          this.setState({ expand: true });
        }}
        onMouseLeave={() => {
          this.setState({ expand: false });
        }}
      >
        <div className={block_cont}>
          <div className={title}>{this.props.title}</div>
          {this.state.expand && (
            <>
              <div className={description}>{this.props.description}</div>
              <div className={block_image_cont}>
                <img className={block_image} src={this.props.image} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
