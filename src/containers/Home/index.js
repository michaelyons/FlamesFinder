import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoadingFire from '../../components/LoadingFire/LoadingFire';
import './index.css';

export class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">FlamesFinder</h1>
        </header>
        <Link to={'/campsites'} className="findcamps-button">
          Find Nearby Campsites
        </Link>
        <LoadingFire />
      </div>
    );
  }
}

export default Home;
