import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampsiteList from '../CampsiteList';
import Campsite from '../Campsite';
import Home from '../Home';

export class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/campsites" component={CampsiteList} />
            <Route
              exact
              path="/campsites/:id"
              render={({ match }) => {
                return <Campsite facilityID={match.params.id} />;
              }}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
