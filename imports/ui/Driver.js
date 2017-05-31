import React from 'react';

export default class Driver extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name} - {this.props.vehicleColor} {this.props.vehicleModel}</h3>
        <p>Has {this.props.seats} seat(s) left.</p>
        <button>Ride</button>
      </div>
    );
  }
}
