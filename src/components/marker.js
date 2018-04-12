import React, { Component } from 'react';
import Marker from 'google-map-react';
import InfoWindow from 'react-google-maps'

export default class PizzaMarker extends Component{
	constructor(props){
    	super(props)
    	this.state = {
      		showInfo: false
   		}
  	}

  	onClickMarker(){
    	this.setState({showInfo: !this.state.showInfo})
  	}
  	/*
  	turnOffMarker(){
  		this.setState({showInfo: false})
  	}
  	*/

	render(){
		return(
			<div onMouseOver={this.onClickMarker.bind(this)}><img src={this.props.img_src} className="PizzaMarker"  width = "20" height = "20" style={{}} /> {this.state.showInfo && (
          		<div>
            		<div>Pizza</div>
          		</div>
        		)} 
			</div>
			)
	}
}