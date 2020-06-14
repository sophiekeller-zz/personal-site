import React from "react";
import mapboxgl from 'mapbox-gl';

//Design
//https://www.figma.com/file/uUUhSwJvvoykcZkBS8kkx4/Personal-Site?node-id=0%3A1
//COMPONENTS
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
//SCREENS
import About from "./screens/About.js";
import Work from "./screens/Work.js";
import Interest from "./screens/Interest.js";
import Travel from "./screens/Travel.js";
//STYLES
import "./assets/styles/styles.css";

//CONSTANTS
import { screenId } from "./constants.js";

mapboxgl.accessToken = 'pk.eyJ1Ijoic29waGlla2VsbGVyIiwiYSI6ImNrYjl2ZGZ0eTBhN2kyb28zdzJocHBybTQifQ.alzUyzxoScJyQ8Bw0kjh7Q';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      screenId: screenId.about,//default to home page
      width: window.innerWidth,//get width of page (for mobile)
      // lng: 5,
      // lat: 34,
      // zoom: 2
    };
  }


  //add listener for screen size change
  componentWillMount() {
      window.addEventListener('resize',this.handleWindowSizeChange);
      document.title = "Sophie Keller"
  }
  //make sure to remove the listener when
  // the component is not mounted anymore
  componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  //function called on resize
  handleWindowSizeChange = () => {
      this.setState({width: window.innerWidth});
  };
  /*
  Given a screen id, swap to that page
  */
  switchPage = screenId => {
    this.setState({ screenId: screenId });
  };

  //based on this.state.screenId, figure out which page to render!
  getCurrentPage = (mobile) => {
    switch (this.state.screenId) {
      case screenId.about:
        return <About mobile = {mobile}/>;
      case screenId.interest:
        return <Interest mobile = {mobile}/>;
      case screenId.work:
        return <Work mobile = {mobile}/>;
      case screenId.travel:
        return <Travel mapcont = {this.mapcontainer} mobile = {mobile}/>;
      default:
        return <div> 404 page not found {this.state.screenId}</div>; //shouldn't ever reach this
    }
  };

  //render the navbar and the current page being looked at
  render() {
    const { width } = this.state;
    const isMobile = width <= 650;
    if (isMobile) {
    return (

        <div class="main-container">
          <Navbar mobile={true} switchPage={this.switchPage} selectedId={this.state.screenId} />
          {this.getCurrentPage(true)}
          <Footer />
        </div>
    );
    } else {
    return (
      <div class="main-container">
        <Navbar mobile = {false} switchPage={this.switchPage} selectedId={this.state.screenId} />
        {this.getCurrentPage(false)}
        <Footer />
      </div>
  );}
  }
}
