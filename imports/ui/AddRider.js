import React from 'react';

import { Riders } from '../api/riders';

export default class AddRider extends React.Component {
  handleSubmit(e) {
    let name = e.target.name.value;
    let phone = e.target.name.value;

    e.preventDefault();

    if ( name && phone ) {
      e.target.name.value = '';
      e.target.name.value = '';

      Riders.insert({
        name: name,
        phone: phone
      });
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="name" placeholder="First name"/>
          <input type="text" name="phone" placeholder="Phone number"/>
          <button>Add Rider</button>
        </form>
      </div>
    );
  }
}
