import React from 'react';

import { Drivers } from '../api/drivers';

export default class AddRider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ride: false
    };
  }
  handleClick() {
    this.setState({ride: !this.state.ride});
    if ( this.state.ride === true ) {
      Drivers.update({_id: this.props.id}, {$inc: {seats: 1}});
    } else if ( this.state.ride === false ) {
      Drivers.update({_id: this.props.id}, {$inc: {seats: -1}});
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>
          { this.state.ride ? 'Unride' : 'Ride' }
        </button>
      </div>
    );
  }
}
