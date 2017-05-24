import React from 'react';

import { Drivers } from './../api/drivers';

export default class AddDriver extends React.Component {
  handleSubmit(e) {
    let firstName = e.target.firstName.value;
    let vehicle = e.target.vehicle.value;
    let seats = e.target.seats.value;

    e.preventDefault();

    if (firstName && vehicle && seats) {
      e.target.firstName.value = '';
      e.target.vehicle.value = '';
      e.target.seats.value = '';

      Drivers.insert({
        name: firstName,
        vehicle: vehicle,
        seats: seats
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="firstName" placeholder="First name here"/>
          <input type="text" name="vehicle" placeholder="Vehicle"/>
          <input type="number" name="seats" placeholder="Seats available"/>
          <button>Add Driver</button>
        </form>
      </div>
    );
  }
}
