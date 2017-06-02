import React from 'react';

import { Drivers } from '../api/drivers';

import AddRider from './AddRider';
import Riders from './Riders';

export default class RideOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rideClicked: false,
      showRidersClicked: false
    };
  }
  renderRiders(e) {
    e.preventDefault();
    this.setState({showRidersClicked: !this.state.showRidersClicked});
  }
  renderAddRider(e) {
    e.preventDefault();
    this.setState({rideClicked: !this.state.rideClicked});
  }
  render() {
    return (
      <div>
        <button onClick={this.renderAddRider.bind(this)}>
          {this.state.rideClicked ? 'Unride' : 'Ride' }
        </button>

        <button onClick={this.renderRiders.bind(this)}>
          {this.state.showRidersClicked ? 'Unshow Riders' : 'Show Riders' }
        </button>

        {this.state.rideClicked ? <AddRider id={this.props.id} riders={this.props.riders}/> : undefined}

        {this.state.showRidersClicked ? <Riders id={this.props.id} riders={this.props.riders}/> : undefined}

      </div>
    );
  }
}
