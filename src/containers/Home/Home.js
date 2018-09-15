import React, { Component } from 'react';

export class Home extends Component {
  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      // do_something(position.coords.latitude, position.coords.longitude);
    });
  };

  render() {
    return (
      <div>
        <h1>poop</h1>
        <button onClick={this.getCurrentPosition}>Find Campsites Nearby</button>
      </div>
    );
  }
}

export default Home;
