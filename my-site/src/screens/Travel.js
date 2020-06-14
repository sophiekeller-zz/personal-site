import React from "react";
import mapboxgl from 'mapbox-gl';
//COMPONENTS
import Footer from "../components/Footer";
import images from "../assets/images/images.js"
import Title from "../components/Title.js"

mapboxgl.accessToken = 'pk.eyJ1Ijoic29waGlla2VsbGVyIiwiYSI6ImNrYjl2ZGZ0eTBhN2kyb28zdzJocHBybTQifQ.alzUyzxoScJyQ8Bw0kjh7Q';

export default class Travel extends React.Component {
    constructor(props) {
      super(props);

      //initialize state
      this.state = {
        lng: -39.861729,
        lat: 42.78229,
        zoom: 2
      };
    }


    componentDidMount(){
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/sophiekeller/ckb9velp91dp01irtu7afvhnx',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
  });
        var info = [
            {coord:[-73.9668,44.1895],img: "adiron.png", title: "Adirondacks"},
            {coord:[-76.485270,42.456182],img: "aephi.png", title: "Cornell Aephi"},
            {coord:[-73.761043,42.648529],img: "albany.png", title: "Albany"},
            {coord:[ -71.9673386,-13.5226402],img: "cuzco.png", title: "Cusco"},
            {coord:[-87.788663, 42.149117],img: "botanic.png", title: "Chicago Botanic Gardens"},
            {coord:[-85.4513,36.5378],img: "dalehollow.png", title: "Dalehollow Lake"},
            {coord:[8.0414,46.6242],img: "grindelwald.png", title: "Grindelwald"},
            {coord:[-91.1353, -0.8292],img: "galapagos.png", title: "Galapagos Islands"},
            {coord:[-80.7526,32.2163],img: "hilton.png", title: "Hilton Head"},
            {coord:[-77.0428, -12.0464],img: "lima.png", title: "Lima"},
            {coord:[-72.2643, -13.2584],img: "inca.png", title: "Inca Trail"},
            {coord:[-71.1712,41.5101],img: "littlecompton.png", title: "Little Compton"},
            {coord:[-72.5450, -13.1631],img: "macchu.png", title: "Macchu Picchu"},
            {coord:[2.2945, 48.8584],img: "paris.png", title: "Paris"},
            {coord:[-72.1156,-13.3058],img: "urubamba.png", title: "Urubamba"},
            {coord:[-110.7774,43.7283],img: "surprise.png", title: "Grand Teton National Park"},
            {coord:[-85.3018,44.9129],img: "torch.png", title: "Torch Lake"},
            {coord:[-0.0769,51.5081],img: "towerlondon.png", title: "London"},
            {coord:[-78.4678,-0.1807],img: "quito.png", title: "Quito"},
            {coord:[-76.5019,42.4440],img: "ithaca.png", title: "Ithaca"},
            {coord:[-110.55885,44.4280],img: "yellowstone.png", title: "Yellowstone National Park"},
            {coord:[-122.4230,37.8270],img: "alcatraz.png", title: "Alcatraz Island"},
            {coord:[-111.3743,36.8619],img: "antelope.png", title: "Antelope Canyon"},
            {coord:[-116.1773,51.4254],img: "banff.png", title: "Banff National Park"},
            {coord:[-121.8081,36.2704],img: "bigsur.png", title: "Big Sur"},
            {coord:[-112.1871,37.5930],img: "bryce.png", title: "Bryce Canyon National Park"},
            {coord:[-114.0719,51.0447],img: "calgary.png", title: "Calgary"},
            {coord:[-84.5120,39.1031],img: "cincinatti.png", title: "Cincinatti"},
            {coord:[13.6177,47.4512],img: "dachstein.png", title: "Dachstein Glacier"},
            {coord:[-81.5639,28.3852],img: "disney.png", title: "Disney World"},
            {coord:[10.0266,46.9858],img: "gaschurn.png", title: "Gaschurn"},
            {coord:[-113.73764,48.74425],img: "glacier.png", title: "Glacier National Park"},
            {coord:[-112.1401,36.0544],img: "grandcan.png", title: "Grand Canyon National Park"},
            {coord:[-121.1682,35.6852],img: "hearstcastle.png", title: "Hearst Castle"},
            {coord:[-110.5885,44.4280],img: "yellowstone.png", title: "Yellowstone National Park"},
            {coord:[-111.6566,40.9033],img: "horseshoe.png", title: "Horseshoe Canyon"},
            {coord:[10.4471,47.5739],img: "jungholz.png", title: "Jungholz"},
            {coord:[-80.4473,25.0865],img: "keylargo.png", title: "Key Largo"},
            {coord:[-118.3217,34.08364],img: "losangeles.png", title: "Los Angeles"},
            {coord:[-80.13,25.7907],img: "miami.png", title: "Miami"},
            {coord:[-121.8947,36.6002],img: "monterey.png", title: "Monterey"},
            {coord:[10.5012,47.6236],img: "nesselwang.png", title: "Nesselwang"},
            {coord:[-76.5019,42.4440],img: "raftglac.png", title: "Flathead River"},
            {coord:[8.6285,48.1653],img: "rottweil.png", title: "Rottweil"},
            {coord:[13.0550,47.8095],img: "salzburg.png", title: "Salzburg"},
            {coord:[-119.6856,34.41],img: "santabarb.png", title: "Santa Barbara"},
            {coord:[-118.496,34.0099],img: "santamon.png", title: "Santa Monica"},
            {coord:[-117.8971,33.6073],img: "seal.png", title: "Newport Beach"},
            {coord:[16.3810,48.1916],img: "vienna.png", title: "Vienna"},
            {coord:[-111.9043,36.9561],img: "whitepocket.png", title: "White Pockets"},
            {coord:[-112.9469,37.2690],img: "zion.png", title: "Zion National Park"},
            {coord:[-122.4783,37.8199],img: "sanfran.png", title: "San Francisco"}
        ]
        info.forEach(addmarker)
        function addmarker(item, index){
            var marker = new mapboxgl.Marker(
             {color: '#507dbc'}
             )
             .setLngLat(item.coord)
             .setPopup(new mapboxgl.Popup().setHTML("<img width = '200px' src='/static/media/"+item.img+"'><h2>"+item.title+"</h2>"))
             .addTo(map)
        }
    }
  render() {

    //notation passes along all props from the Home component to child components
    return (
      <div className="travel-container">
        <Title mobile={this.props.mobile} title="my travels"/>
        <div className = "underline"></div>
        <div className = "map-section">
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
        </div>
      </div>
    );


  }
}
