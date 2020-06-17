import React from "react";

//CONSTANTS
import images from "../assets/images/images.js"

//COMPONENTS
import Block from "../components/Block";

/*
* About screen renders a short prof pic/intro as well as blue blocks of
* introductory information. About components are only used by App.js
*
* Props:
*   mobile: whether or not screen is mobile, bool
*/
export default class About extends React.Component {
  render() {
      //change classes to specify mobile/non mobile style
      if (this.props.mobile) {
          var bio_title = "m-bio-title";
          var bio_desc = "m-bio-description";
          var bio_cont = "m-bio-container";
          var bio_text = "m-bio-text";
          var bio_image = "m-bio-image";
          //customize organization of blocks for mobile version
          var html = (<div className = "m-info-block-container">
            <Block mobile = {true} color = {"light"} title = {"Computer Science Major"} description={["Cornell University", <br/>, "Class of 2022",<br/>,"#GoBigRed"]} image={images.cornell}/>
            <Block mobile = {true} color = {"dark"}  title = {"Proud Chicagoan"} description={"#GoCubs"} image={images.chicago}/>
            <Block mobile = {true} color = {"light"} title = {"Jones College Prep High School"} description={"Class of 2018"} image={images.jones}/>
            <Block mobile = {true} color = {"dark"} title = {"Crafter"} description={"Knitting, Macrame, Cross stitch"} image={images.mac}/>
            <Block mobile = {true} color = {"light"}  title = {"Woman in STEM"} description={"Check out this site I made:"} image={images.woman}/>
            <Block mobile = {true} color = {"dark"} title = {"Fan of the Outdoors"} description={"Hiking, Biking, Running, Swimming, Sailing"} image={images.hiking}/>
          </div>)
      }else{
          var bio_title = "bio-title"
          var bio_desc = "bio-description"
          var bio_cont = "bio-container"
          var bio_text = "bio-text"
          var bio_image = "bio-image"
          //customize organization of blocks for non mobile version
          var html = (<div className = "info-block-container">
              <div className = "column">
                  <Block mobile = {false} color = {"light"} title = {"computer science major"} description={["cornell university", <br/>, "class of 2022",<br/>,"#GoBigRed"]} image={images.cornell}/>
                  <Block mobile = {false} color = {"dark"} title = {"crafter"} description={"knitting, macrame, cross stitch"} image={images.mac}/>
              </div>
              <div className = "column">
                  <Block mobile = {false} color = {"dark"}  title = {"proud chicagoan"} description={"#GoCubs"} image={images.chicago}/>
                  <Block mobile = {false} color = {"light"}  title = {"woman in STEM"} description={"check out this site I made:"} image={images.woman}/>
              </div>
              <div className = "column">
                  <Block mobile = {false} color = {"light"} title = {"jones college prep high school"} description={"class of 2018"} image={images.jones}/>
                  <Block mobile = {false} color = {"dark"} title = {"outdoorsy"} description={"hiking, biking, running, swimming, sailing"} image={images.hiking}/>
              </div>
          </div>)
      }
    return (
      <div className="home-container">
        <div className = {bio_cont}>
            <div className = {bio_image}></div>
            <div className = {bio_text}>
                <div className = {bio_title}>welcome.</div>
                <div className = {bio_title}>i'm sophie keller.</div>
                <div className = {bio_desc}>student, software developer, designer, adventurer, chicagoan</div>
            </div>
        </div>
        {html}
      </div>
    );


  }
}
