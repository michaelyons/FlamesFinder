import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrentWeatherData,
  getFiveDayWeatherData
} from './helper/apiCalls';
import { addCurrentWeather, addFiveDayWeather } from './actions/weatherActions';
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
  addFiveDayWeather: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather)),
  addFiveDayWeather: weather => dispatch(addFiveDayWeather(weather))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
