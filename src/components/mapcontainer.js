import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pizza from './images/pizza.png'
 
const PizzaMarker = ({  img_src }) => <div><img src={img_src} className="PizzaMarker" onClick={this.showInformation} width = "20" height = "20" style={{}} /></div>;



export default class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
        markers: [],
    }
  }


  componentDidMount(){
    // or you can set markers list somewhere else
    // please also set your correct lat & lng
    // you may only use 1 image for all markers, if then, remove the img_src attribute ^^
    this.setState({
      markers: [{lat: 40.758896, lng: -73.985130, img_src: pizza, currentLocation: false}],
      currentLocationMarkerIndex: -1
    });
  }

  addMarker(lati,long){
    
    this.state.currentLocationMarkerIndex = this.state.markers.push({lat: lati, lng: long, img_src: pizza, currentLocation: true}) - 1; 
    this.forceUpdate();
  }

  removeCurrent(){
    this.state.markers.splice(this.state.currentLocationMarkerIndex);
    this.forceUpdate();
  }


  static defaultProps = {
    center: {lat: 40.758896, lng: -73.985130},
    zoom: 11
  };

 
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAIQZMVYWhDwlR9mqBRL-dOGxW3LwLV-ds' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onClick = {({x, y, lat, lng, event}) => this.addMarker(lat,lng)}
      >
      
        {this.state.markers.map((marker, i) =>{
              return(
                <PizzaMarker
                  lat={marker.lat}
                  lng={marker.lng}
                  img_src={marker.img_src}
                />

              )
            })}
        <div>
        <button className="button"> Show All </button>
        <button className="button"> Show Relevant </button>
        <button className="button" onClick = {this.removeCurrent.bind(this)}> Reset Current </button>
        </div>
      </GoogleMapReact>

    );
  }
}