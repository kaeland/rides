import React from 'react';

import { Drivers } from '../api/drivers';

import RideOptions from './RideOptions';

export default class Driver extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name} has {this.props.seats} seat(s) left.</h3>
        <p>Destination: {this.props.destination}</p>
        <p>Vehicle: {this.props.vehicleColor} {this.props.vehicleModel}</p>
        <RideOptions id={this.props.id} riders={this.props.riders}/>
      </div>
    );
  }
}
