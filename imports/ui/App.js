import React from 'react';

import TitleBar from './TitleBar';
import AddDriver from './AddDriver';
import DriverList from './DriverList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar/>
        <AddDriver/>
        <DriverList drivers={this.props.drivers}/>
      </div>
    );
  }
}
