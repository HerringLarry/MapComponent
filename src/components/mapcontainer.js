import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pizza from './images/pizza.png'
import AddressBox from './AddressBox'
 
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
      markers: [{lat: 40.758896, lng: -73.985130, img_src: pizza}],
      currentAddress: "114 Bellair Drive",
    });
  }

  showInformation(){
    console.log("hello")
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
      </GoogleMapReact>

    );
  }
}