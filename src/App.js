import React, { Component } from 'react';
import Routes from './containers/Routes/Routes';

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
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
