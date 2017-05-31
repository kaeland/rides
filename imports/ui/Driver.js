import React from 'react';

import AddRider from './AddRider';
import { Drivers } from '../api/drivers';

export default class Driver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      riders: ``
    }
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.clicked === true) {
      for (var i = 0; i < this.props.riders.length; i++) {
        this.setState({riders: this.state.riders + ` ${this.props.riders[i]}`});
      }
    } else if (this.state.clicked === false) {
        this.setState({riders: null});
    }

  }
  render() {
    return (
      <div>
        <h3>{this.props.name} has {this.props.seats} seat(s) left.</h3>
        <p>Vehicle: {this.props.vehicleColor} {this.props.vehicleModel}</p>
        <p>Destination: {this.props.destination}</p>
        <AddRider id={this.props.id}/>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.clicked ? 'Unshow Riders' : 'Show Riders' }
        </button>
        { this.state.clicked ? <p>{this.state.riders}</p> : undefined }
      </div>
    );
  }
}
