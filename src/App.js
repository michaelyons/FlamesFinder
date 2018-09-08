import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrentWeatherData,
  getTenHourWeatherData,
  getFiveDayWeatherData
} from './helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addFiveDayWeather
} from './actions/weatherActions';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }

  componentDidMount = () => {
    this.populateCurrentWeather();
    this.populateFiveDayWeather();
    this.populateTenHourWeather();
  };

  populateCurrentWeather = async () => {
    try {
      const currentLocationWeather = await getCurrentWeatherData();
      this.props.addCurrentWeather(currentLocationWeather);
    } catch (error) {
      this.setState({
        errors: error.message
      });
    }
  };

  populateFiveDayWeather = async () => {
    try {
      const addFiveDayWeather = await getFiveDayWeatherData();
      this.props.addFiveDayWeather(addFiveDayWeather);
    } catch (error) {
      this.setState({
        errors: error.message
      });
    }
  };

  populateTenHourWeather = async () => {
    try {
      const addTenHourWeather = await getTenHourWeatherData();
      this.props.addTenHourWeather(addTenHourWeather);
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
      </div>
    );
  }
}

App.propTypes = {
  addCurrentWeather: PropTypes.func.isRequired,
  addTenHourWeather: PropTypes.func.isRequired,
  addFiveDayWeather: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather)),
  addTenHourWeather: weather => dispatch(addTenHourWeather(weather)),
  addFiveDayWeather: weather => dispatch(addFiveDayWeather(weather))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
