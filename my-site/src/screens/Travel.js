import React from "react";
import mapboxgl from 'mapbox-gl';

//COMPONENTS
import Footer from "../components/Footer";
import images from "../assets/images/images.js"
import Title from "../components/Title.js"

//MAPBOX TOKEN FOR CONNECTION
mapboxgl.accessToken = 'pk.eyJ1Ijoic29waGlla2VsbGVyIiwiYSI6ImNrYjl2ZGZ0eTBhN2kyb28zdzJocHBybTQifQ.alzUyzxoScJyQ8Bw0kjh7Q';

/*
* Travel screen renders title and MapboxGL map documenting locations with photos
* and titles. Travel components are only used by App.js
*
* Props:
*   mobile: whether or not screen is mobile, bool
*/
export default class Travel extends React.Component {
    constructor(props) {
      super(props);
      //initialize screen's state to change map according to mobile screen
      if (this.props.mobile){
          this.state = {
            lng: -80.13,
            lat:  25.7907,
            zoom: 1
          }
      }else{
          this.state = {
            lng: -40.385,
            lat:  37.2133,
            zoom: 1
          };
      }
    }
    //create mapboxgl instance using personalized style
    componentDidMount(){
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/sophiekeller/ckb9velp91dp01irtu7afvhnx',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
  });
        //iterate through const list, adding markers for each location with image and title
        info.forEach(addmarker)
        function addmarker(item, index){
            var marker = new mapboxgl.Marker(
             {color: '#507dbc'}
             )
             .setLngLat(item.coord)
             .setPopup(new mapboxgl.Popup().setHTML("<img width = '200px' src='/static/media/"+item.img+"'><h2>"+item.title+"</h2>"))
             .addTo(map)
        }
        var popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat([-100,57])
            .setHTML('<h3>Click a pin for more info!</h3>')
            .addTo(map);
    }
  render() {
      //change classes to specify mobile/non mobile style
      if (this.props.mobile){
          var mapclass = "m-mapContainer"
      }else{
          var mapclass = "mapContainer"
      }

    return (
      <div className="travel-container">
        <Title mobile={this.props.mobile} title="adventures"/>
        <div className = "underline"></div>
        <div className = "map-section">
        <div ref={el => this.mapContainer = el} className={mapclass}/>
        </div>
      </div>
    );
  }
}

//consts for file -> data for marker's in the map
const info = [
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
    {coord:[-111.5104,36.8792],img: "horseshoe.png", title: "Horseshoe Bend"},
    {coord:[10.4471,47.5739],img: "jungholz.png", title: "Jungholz"},
    {coord:[-80.4473,25.0865],img: "keylargo.png", title: "Key Largo"},
    {coord:[-118.3217,34.08364],img: "losangeles.png", title: "Los Angeles"},
    {coord:[-80.13,25.7907],img: "miami.png", title: "Miami"},
    {coord:[-121.8947,36.6002],img: "monterey.png", title: "Monterey"},
    {coord:[10.5012,47.6236],img: "nesselwang.png", title: "Nesselwang"},
    {coord:[-113.9844,48.49771],img: "raftglac.png", title: "Flathead River"},
    {coord:[8.6285,48.1653],img: "rottweil.png", title: "Rottweil"},
    {coord:[13.0550,47.8095],img: "salzburg.png", title: "Salzburg"},
    {coord:[-119.6856,34.41],img: "santabarb.png", title: "Santa Barbara"},
    {coord:[-118.496,34.0099],img: "santamon.png", title: "Santa Monica"},
    {coord:[-117.8971,33.6073],img: "seal.png", title: "Newport Beach"},
    {coord:[16.3810,48.1916],img: "vienna.png", title: "Vienna"},
    {coord:[-111.9043,36.9561],img: "whitepocket.png", title: "White Pockets"},
    {coord:[-112.9469,37.2690],img: "zion.png", title: "Zion National Park"},
    {coord:[-75.3705,40.6259],img: "bethlehempa.png", title: "Bethlehem"},
    {coord:[-71.0942,42.3601],img: "boston.png", title: "Boston"},
    {coord:[-84.9301,45.1629],img: "boyne.png", title: "Boyne Mountain"},
    {coord:[-64.6206,17.7871],img: "buckisland.png", title: "Buck Island"},
    {coord:[-87.9018,41.71059],img: "bullfroglake.png", title: "Bullfrog Lake"},
    {coord:[-86.7680,40.6079],img: "campt.png", title: "Camp Tecumseh"},
    {coord:[-80.9419,35.1028],img: "carowinds.png", title: "Carowinds"},
    {coord:[-88.2434,40.1164],img: "champaign.png", title: "Champaign"},
    {coord:[-80.8431,35.2271],img: "charlotte.png", title: "Charlotte"},
    {coord:[12.1357,46.5405],img: "cortina.png", title: "Cortina"},
    {coord:[11.8743,46.5526],img: "corvara.png", title: "Corvara"},
    {coord:[-83.5312,35.7951],img: "dollywood.png", title: "Dollywood"},
    {coord:[13.5218,47.4347],img: "filzmoos.png", title: "Filzmoos"},
    {coord:[11.2555,43.7731],img: "florence.png", title: "Florence"},
    {coord:[-85.9889,44.8977],img: "glenarb.png", title: "Glen Arbor"},
    {coord:[-84.3099,39.36004],img: "greatwolflebanon.png", title: "Lebanon"},
    {coord:[-85.442056,44.772344],img: "hoxsies.png", title: "Williamsburg"},
    {coord:[-84.967011,45.022518],img: "jordanriver.png", title: "Jordan River Valley"},
    {coord:[-71.22272,42.4473],img: "lexington.png", title: "Lexintgon"},
    {coord:[-84.6276,45.8683],img: "macinac.png", title: "Macinac Island"},
    {coord:[-84.6784,35.1592],img: "ocoee.png", title: "Ocoee River"},
    {coord:[-86.024082,45.10203],img: "manitou.png", title: "Manitou Islands"},
    {coord:[-90.5151,41.5067],img: "moline.png", title: "Moline"},
    {coord:[-79.0377,43.0962],img: "niagara.png", title: "Niagara"},
    {coord:[10.7498,47.5576],img: "noishvan.png", title: "Neuschwanstein Castle"},
    {coord:[-86.2353,41.7056],img: "notredame.png", title: "Notre Dame"},
    {coord:[-75.1932,39.9522],img: "philly.png", title: "Philadelphia"},
    {coord:[-79.9959,40.4406],img: "pittsburg.png", title: "Pittsburgh"},
    {coord:[-71.4128,41.8240],img: "providence.png", title: "Providence"},
    {coord:[12.4964,41.9028],img: "rome.png", title: "Rome"},
    {coord:[-85.1853,44.9492],img: "shantycreek.png", title: "Shanty Creek"},
    {coord:[-85.5803,41.6728],img: "shipshewana.png", title: "Shipshewana"},
    {coord:[-90.3435,41.5982],img: "sneakypetes.png", title: "Le Claire"},
    {coord:[-64.8348,17.7246],img: "stcroix.png", title: "St. Croix"},
    {coord:[12.4534,41.9029],img: "vatican.png", title: "The Vatican"},
    {coord:[12.3155,45.4408],img: "venice.png", title: "Venice"},
    {coord:[-89.4693,41.9935],img: "whitepines.png", title: "White Pines State Park"},
    {coord:[-122.4783,37.8199],img: "sanfran.png", title: "San Francisco"},
    {coord:[-83.7032,35.2470],img: "toptonnc.png", title: "Topton"},
    {coord:[-21.12822,64.25543],img: "thingvellir.png", title: "Thingvellir"},
    {coord:[-72.0787,42.1084],img: "stirbridge.png", title: "Sturbridge"},
    {coord:[-74.01051,40.7222],img: "soho.png", title: "Soho"},
    {coord:[-19.5114,63.5321],img: "skogafoss.png", title: "Skogafoss"},
    {coord:[-77.6013,43.2613],img: "rochester.png", title: "Rochester"},
    {coord:[-21.9392,64.1499],img: "reykjavic.png", title: "Reykjavik"},
    {coord:[-21.2237,63.8778],img: "porlashofkn.png", title: "Porlakshofn"},
    {coord:[-70.6673,41.9584],img: "plymouth.png", title: "Plymouth"},
    {coord:[-71.9665,41.3543],img: "mystic.png", title: "Mystic"},
    {coord:[-21.9999,63.86666],img: "hafnarfjordur.png", title: "Hafnarfjordur"},
    {coord:[-20.1199,64.3271],img: "gulfoss.png", title: "Gulfoss"},
    {coord:[-73.8326,42.6220],img: "delmar.png", title: "San Francisco"},
    {coord:[-83.3718,35.6393],img: "charliessmokeys.png", title: "Smokey Mountains"},
    {coord:[-73.9654,40.7829],img: "centralpark.png", title: "Central Park"},
    {coord:[-22.4494,63.8803],img: "bluelagoon.png", title: "Blue Lagoon"},
    {coord:[-87.6233,41.8827],img: "bean.png", title: "Chicago"},





]
