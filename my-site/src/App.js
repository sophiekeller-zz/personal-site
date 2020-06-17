import React from "react";

//DESIGN LINK:
//https://www.figma.com/file/uUUhSwJvvoykcZkBS8kkx4/Personal-Site?node-id=0%3A1

//STYLES
import "./assets/styles/styles.css";

//CONSTANTS
import { screenId } from "./constants.js";

//COMPONENTS
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

//SCREENS
import About from "./screens/About.js";
import Work from "./screens/Work.js";
import Interest from "./screens/Interest.js";
import Travel from "./screens/Travel.js";

/*
* Main App class. Instantiated in ./index.js. Renders a Navbar, current page
* screen (according to state.screenId), and Footer. Determines size of screen
* (mobile or non mobile).
*
* Props: none
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      screenId: screenId.about,//defaults to about page
      width: window.innerWidth,//get width of page (for mobile)
    };
  }

  //add listener for screen size change
  componentWillMount() {
      window.addEventListener('resize',this.handleWindowSizeChange);
      document.title = "Sophie Keller";
  }

  //remove the listener when the component is not mounted anymore
  componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  //function called on resize of screen to change screen width in state
  handleWindowSizeChange = () => {
      this.setState({width: window.innerWidth});
  };

  //given a screen id [string], change state screenId
  switchPage = screenId => {
    this.setState({ screenId: screenId });
  };

  //based on this.state.screenId, figure out which page to render
  getCurrentPage = (mobile) => {
    switch (this.state.screenId) {
      case screenId.about:
        return <About mobile = {mobile}/>;
      case screenId.interest:
        return <Interest mobile = {mobile}/>;
      case screenId.work:
        return <Work mobile = {mobile}/>;
      case screenId.travel:
        return <Travel mobile = {mobile}/>;
      default:
        return <div> 404 page not found {this.state.screenId}</div>; //shouldn't ever reach this
    }
  };

  //render the navbar, footer, and the current page being looked at
  render() {
    const { width } = this.state; //get width of screen
    const isMobile = width <= 650;//use width to determine if screen is mobile
    if (isMobile) {
        var page = this.getCurrentPage(true)//pass screen's mobile prop 'true'
    }else{
        var page = this.getCurrentPage(false)//pass screen's mobile prop 'false'
    }
    return (
        <div className="main-container">
          <Navbar mobile={isMobile} switchPage={this.switchPage} selectedId={this.state.screenId} />
          {page}
          <Footer />
        </div>
    );
  }
}
