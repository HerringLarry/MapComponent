import React, { Component } from 'react';

export default class AddressBox extends Component {
	render(){
		return(
		<form>
  			<label>
    			Address:
    			<input type="text" address="Address" />
  			</label>
  			<input type="submit" value="Submit" />
		</form>
		)
	}

	}