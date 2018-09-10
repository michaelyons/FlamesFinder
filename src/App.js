import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allWeatherData } from './helper/apiCalls';
import { addCurrentWeather } from './actions/weatherActions';
import { LocationSearch } from './containers/LocationSearch/LocationSearch';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }

  componentDidMount = () => {
    this.populateWeather();
  };

  populateWeather = async () => {
    try {
      const currentLocationWeather = await allWeatherData();
      this.props.addCurrentWeather(currentLocationWeather);
    } catch (error) {
      this.setState({
        errors: error.message
      });
    }
  };

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

App.propTypes = {
  addCurrentWeather: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
