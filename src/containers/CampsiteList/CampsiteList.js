import React, { Component } from 'react';

export class CampsiteList extends Component {
  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      // do_something(position.coords.latitude, position.coords.longitude);
    });
  };

  render() {
    return (
      <div>
        <h2>poop</h2>
      </div>
    );
  }
}

export default CampsiteList;
