import React from 'react';

export default class Driver extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name} has {this.props.seats} seat(s) left in their {this.props.vehicleColor} {this.props.vehicleModel}</h3>
      </div>
    );
  }
}
