import React from "react";

//COMPONENTS
import Footer from "../components/Footer";
import images from "../assets/images/images.js"
import Title from "../components/Title"

export default class Travel extends React.Component {
  render() {
      if (this.props.mobile){
          var img_cont = "m-podcast-images-container"
          var moth = "m-themoth pod-pic"
          var radio = "m-radio pod-pic"
          var amer = "m-this-amer pod-pic"
          var books = (<div class = "books-container">
              <div class = "books-row">
              <div class = "smallthings m-book"></div>
              <div class = "giver m-book"></div>
              </div>
              <div class = "books-row">
              <div class = "lightwecan m-book"></div>
              <div class = "heartbeats m-book"></div>
              </div>
              <div class = "books-row">
              <div class = "littlew m-book"></div>
              <div class = "orphan m-book"></div>
              </div>
              <div class = "books-row">
              <div class = "bookthief m-book"></div>
              <div class = "wolves m-book"></div>
              </div>
              <div class = "books-row">
              <div class = "givesun m-book"></div>
              </div>
          </div>)
      }else{
          var img_cont = "podcast-images-container"
          var moth = "themoth pod-pic"
          var radio = "radio pod-pic"
          var amer = "this-amer pod-pic"
          var books = (<div class = "books-container">
              <div class = "books-row">
              <div class = "smallthings book"></div>
              <div class = "giver book"></div>
              <div class = "lightwecan book"></div>
              </div>
              <div class = "books-row">
              <div class = "heartbeats book"></div>
              <div class = "littlew book"></div>
              <div class = "orphan book"></div>
              </div>
              <div class = "books-row">
              <div class = "bookthief book"></div>
              <div class = "wolves book"></div>
              <div class = "givesun book"></div>
              </div>
          </div>)
      }
      var arrows = "/////"
    //notation passes along all props from the Home component to child components
    return (
      <div className="home-container">
        <div className = "media-container">
            <Title mobile = {this.props.mobile} title="podcasts"/>
            <div class = {img_cont}>
                <div class = {moth}></div>
                <div class = {amer}></div>
                <div class = {radio}></div>
            </div>
        </div>
        <div className = "media-container">
            <Title mobile = {this.props.mobile} title="books"/>
            {books}
        </div>
      </div>
    );


  }
}
