import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allWeatherData } from './helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from './actions/weatherActions';
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
      const allWeatherDataArray = await allWeatherData();
      this.props.addCurrentWeather(allWeatherDataArray[0]);
      this.props.addTenHourWeather(allWeatherDataArray[1]);
      this.props.addTenDayWeather(allWeatherDataArray[2]);
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
  addCurrentWeather: PropTypes.func.isRequired,
  addTenHourWeather: PropTypes.func.isRequired,
  addTenDayWeather: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather)),
  addTenHourWeather: weather => dispatch(addTenHourWeather(weather)),
  addTenDayWeather: weather => dispatch(addTenDayWeather(weather))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
