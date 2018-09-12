import React, { Component } from 'react';
import LocationSearch from './containers/LocationSearch/LocationSearch';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FlamesFinder</h1>
        </header>
        <LocationSearch />
      </div>
    );
  }
}

export default App;
