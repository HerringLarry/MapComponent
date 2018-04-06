import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapPage from './components/MapPage'
 
const Label = ({ text }) => <div>{text}</div>;
 
export default class App extends Component {
  render() {
    return (
      <MapPage />
    );
  }
}
