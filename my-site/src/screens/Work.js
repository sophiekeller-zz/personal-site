import React from "react";

//CONSTANTS
import images from "../assets/images/images.js"

//COMPONENTS
import WorkSection from "../components/WorkSection.js";
import Title from "../components/Title.js"

/*
* Work screen renders Role and Project sections with Titles to demonstrate work
* experience. Work components are only used by App.js
*
* Props:
*   mobile: whether or not screen is mobile, bool
*/
export default class Work extends React.Component{
  render() {
    return (
      <div className="home-container">
        <div className = "work-section-container">
            <div className = "roles-section">
                <Title mobile = {this.props.mobile} title="roles"/>
                <WorkSection mobile = {this.props.mobile} title = {ewh_title} org = {ewh_org} text = {ewh_text} image = {images.ewh}/>
                <WorkSection mobile = {this.props.mobile} title = {cis_title} org = {cis_org} text = {cis_text} image = {images.cis}/>
                <WorkSection mobile = {this.props.mobile} title = {tour_title} org = {tour_org} text = {tour_text} image = {images.cornell}/>
            </div>
            <div className = "projects-section">
                <Title mobile = {this.props.mobile} title = "projects"/>
                <WorkSection mobile = {this.props.mobile} title = {alien_title} org = {alien_org} text = {alien_text} image = {images.space}/>
                <WorkSection mobile = {this.props.mobile} title = {off_title} org = {off_org} text = {off_text} image = {images.off}/>
                <WorkSection mobile = {this.props.mobile} title = {git_title} org = {git_org} text = {git_text} image = {images.git_round}/>
            </div>
        </div>

      </div>
    );
}
}

//consts for file -> title, subtitle, and text for each position
const ewh_title = "Business Lead"
const ewh_org = "Cornell Engineering World Health"
const ewh_text = "Cornell engineering world health is an undergraduate engineering project team at Cornell that aims to create meaningful impact through innovative tech solutions and promoting human welfare. As the business lead of the team, I run the team website, oversee finances and budgeting, lead marketing initiatives, and promote positive team culture."
const cis_title = "Consultant (Teaching Assistant)"
const cis_org = "Cornell CIS Department"
const cis_text = "As a consultant for CS1110, I provide instruction and support for Cornell students in Intro to Computer Science in Python course via hosting discussion sections, office hours, and assignment and exam grading."
const tour_title = "Campus Tour Guide"
const tour_org = "Cornell Visitor Relations"
const tour_text = "As a tour guide, I promote interest in Cornell by leading groups of 30+ prospective students and their families on informational campus tours. Additionally, as part of this role, I operate the campus information desk, university phone line, and manage the on-campus parking system to facilitate visitor logistics on campus."
const alien_title = "Space Invaders in Python"
const alien_org = ""
const alien_text = "I coded the functionality for a simple Space Invadors game in Python with Turtles."
const off_title = "Office Hours App"
const off_org = "App Dev Course"
const off_text = "In this app development project, I coded the front-end in Swift for an application used to organize students' office hour schedules. The app was fully integrated with a course API written by other team members."
const git_title = "My Github"
const git_org = "Click on the image to see my github repos"
const git_text = ""
