import React from 'react';

import TitleBar from './TitleBar';
import AddDriver from './AddDriver';
import DriverList from './DriverList';
import AddRider from './AddRider';
import RiderList from './RiderList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar/>
        <AddDriver/>
        <DriverList drivers={this.props.drivers}/>
        <AddRider/>
        <RiderList riders={this.props.riders}/>
      </div>
    );
  }
}
