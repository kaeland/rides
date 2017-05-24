import React from 'react';

export default class Rider extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name} would like a ride.</h3>
      </div>
    );
  }
}
