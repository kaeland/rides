import React from 'react';

import Driver from './Driver';

export default class DriverList extends React.Component {
  renderDrivers() {
    return this.props.drivers.map((driver) => {
      return <Driver key={driver._id}
        id={driver._id} name={driver.name}
        vehicleColor={driver.vehicleColor}
        vehicleModel={driver.vehicleModel}
        seats={driver.seats}
        riders={driver.riders}
        destination={driver.destination}/>
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderDrivers()}
        </ul>
      </div>
    );
  }
}
