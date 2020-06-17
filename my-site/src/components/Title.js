import React from "react";

/*
* Title component is used in Work, Title, and Travel pages as section title's
* that have two blue underlines
*
* Props:
*   mobile: whether or not screen is mobile, bool
*   title: title of Title, string
*/
export default class Title extends React.Component {
  render() {
      //change classes to specify mobile/non mobile style
      if (this.props.mobile){
          var title_words = "m-title-words"
          var first = "m-first-line"
          var second = "m-second-line"
      }else{
          var title_words = "title-words"
          var first = "first-line"
          var second = "second-line"
      }
      //first and second div's are for underlines of title
    return (
      <div className = "title">
          <div className = {title_words}>{this.props.title}</div>
          <div className = {first}/>
          <div className = {second}/>
      </div>
    );
}
}
