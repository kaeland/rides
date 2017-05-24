import React from 'react';

import Rider from './Rider';

export default class RiderList extends React.Component {
  renderRiders() {
    return this.props.riders.map((rider) => {
      return <Rider key={rider._id} name={rider.name} phone={rider.phone}/>
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderRiders()}
        </ul>
      </div>
    );
  }
}
