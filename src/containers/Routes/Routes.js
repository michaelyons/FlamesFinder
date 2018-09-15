import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampsiteList from '../CampsiteList/CampsiteList';
import Home from '../Home/Home';

export class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/campsites" component={CampsiteList} />
            {/* <LocationSearch /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
