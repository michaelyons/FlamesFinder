import React, { Component } from 'react';
import { getCampsiteData } from '../../helper/apiCalls';

export class CampsiteList extends Component {
  componentDidMount() {
    this.getCurrentPosition();
    // this.getCampsiteData();
  }

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      const { latitude, longitude } = position.coords;

      // do_something(position.coords.latitude, position.coords.longitude);
      getCampsiteData();
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
