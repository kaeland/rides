import React from 'react';

import { Drivers } from '../api/drivers';

export default class Riders extends React.Component {
  renderNames() {
    return this.props.riders.join(' - ');
  }
  render() {
    return (
      <div>
        <p>{this.renderNames()}</p>
      </div>
    );
  }
}
