import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">FlamesFinder</h1>
        </header>
        <Link to={'/campsites'}>Find Nearby Campsites</Link>
      </div>
    );
  }
}

export default Home;
