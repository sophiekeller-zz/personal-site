import React from "react";

//CONSTANTS
import images from "../assets/images/images.js";
import text from "../assets/jsons/work.json";

//COMPONENTS
import WorkSection from "../components/WorkSection.js";
import Title from "../components/Title.js";

/*
 * Work screen renders Role and Project sections with Titles to demonstrate work
 * experience. Work components are only used by App.js
 *
 * Props:
 *   mobile: whether or not screen is mobile, bool
 */
export default class Work extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="work-section-container">
          <div className="roles-section">
            <Title mobile={this.props.mobile} title="roles" />
            {text.roles.map((role) => {
              return (
                <WorkSection
                  mobile={this.props.mobile}
                  title={role.title}
                  org={role.organization}
                  text={role.text}
                  image={images[role.image_title]}
                />
              );
            })}
          </div>
          <div className="projects-section">
            <Title mobile={this.props.mobile} title="projects" />
            {text.projects.map((project) => {
              return (
                <WorkSection
                  mobile={this.props.mobile}
                  title={project.title}
                  org={project.organization}
                  text={project.text}
                  image={images[project.image_title]}
                />
              );
            })}
            <a href="https://github.com/sophiekeller">
              <WorkSection
                mobile={this.props.mobile}
                title={git_title}
                org={git_org}
                text={git_text}
                image={images.git_round}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const git_title = "My Github";
const git_org = "Check out my github.";
const git_text = "";
