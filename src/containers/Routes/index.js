import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampsiteList from '../CampsiteList';
import Campsite from '../Campsite';
import Home from '../Home';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/campsites" component={CampsiteList} />
            <Route
              exact
              path="/campsites/:contractID/:facilityID"
              render={({ match }) => {
                return (
                  <Campsite
                    contractID={match.params.contractID}
                    facilityID={match.params.facilityID}
                  />
                );
              }}
            />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
