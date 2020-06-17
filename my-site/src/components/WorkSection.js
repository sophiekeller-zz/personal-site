import React from "react";

/*
* WorkSection component is used by Work screen to display a title, subtitle,
* image, and description for each work or project experience.
*
* Props:
*   mobile: whether or not screen is mobile, bool
*   title: title of job/project, string
*   org: organization related to job/project, string
*   text: description of job/project, string
*   image: image related to job/project, image url/string
*/
export default class WorkSection extends React.Component {
  render() {
       //change classes to specify mobile/non mobile style
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
