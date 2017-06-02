import React from 'react';

import { Drivers } from '../api/drivers';

export default class AddRider extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let firstName = e.target.firstName.value;


    if ( firstName ) {
      e.target.firstName.value = '';

      Drivers.update({_id: this.props.id}, {$addToSet: {riders: firstName}});
      Drivers.update({_id: this.props.id}, {$inc: {seats: -1}});
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="firstName" placeholder="First Name"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
