import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapContainer from './components/mapcontainer'
 
const Label = ({ text }) => <div>{text}</div>;
 
export default class App extends Component {
  static defaultProps = {
    center: {lat: 40.758896, lng: -73.985130},
    zoom: 11
  };
 
  render() {
    return (
      <MapContainer />
    );
  }
}
