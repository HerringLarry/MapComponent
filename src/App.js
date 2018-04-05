import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapContainer from './components/mapcontainer'
 
const Label = ({ text }) => <div>{text}</div>;
 
export default class App extends Component {
  render() {
    return (
      <MapContainer />
    );
  }
}
