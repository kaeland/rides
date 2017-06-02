import React from 'react';

import { Drivers } from './../api/drivers';

export default class AddDriver extends React.Component {
  handleSubmit(e) {
    let firstName = e.target.firstName.value;
    let vehicleColor = e.target.vehicleColor.value;
    let vehicleModel = e.target.vehicleModel.value;
    let seats = e.target.seats.value;
    let phone = e.target.phone.value;
    let destination = e.target.destination.value;

    e.preventDefault();

    if (firstName && vehicleColor && vehicleModel && seats && phone && destination) {
      e.target.firstName.value = '';
      e.target.vehicleColor.value = '';
      e.target.vehicleModel.value = '';
      e.target.seats.value = '';
      e.target.phone.value = '';
      e.target.destination.value = '';

      Drivers.insert({
        name: firstName,
        vehicleColor: vehicleColor,
        vehicleModel: vehicleModel,
        seats: seats,
        phone: phone,
        destination: destination
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="firstName" placeholder="First name here"/>
          <input type="text" name="vehicleColor" placeholder="Vehicle's Color"/>
          <input type="text" name="vehicleModel" placeholder="Vehicle's Model"/>
          <input type="number" name="seats" placeholder="Seats available"/>
          <br/>
          <input type="text" name="phone" placeholder="Phone"/>
          <br/>
          <input type="destination" name="destination" placeholder="Enter Your Destination"/>
          <br/>
          <button>Add Driver</button>
        </form>
      </div>
    );
  }
}
