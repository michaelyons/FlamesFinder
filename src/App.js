import React, { Component } from 'react';
import Routes from './containers/Routes';

import './App.css';
import Header from './components/Header';

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
        {/* <Header /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
