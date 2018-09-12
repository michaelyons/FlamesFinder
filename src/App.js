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
      console.log(allWeatherDataArray);
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
    let displayWeather;
    // if (!this.props.allWeatherDataArray) {
    //   displayWeather = <p>Loading...</p>;
    // } else {
    //   console.log(this.props.allWeatherDataArray);
    //   displayWeather = this.props.allWeatherDataArray;
    // }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FlamesFinder</h1>
        </header>
        <LocationSearch />
        {displayWeather}
      </div>
    );
  }
}

App.propTypes = {
  addCurrentWeather: PropTypes.func.isRequired,
  addTenHourWeather: PropTypes.func.isRequired,
  addTenDayWeather: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  // currentWeather: state.currentWeather,
  // tenHourWeather: state.tenHourWeather,
  tenDayWeather: state.allWeatherDataArray
});

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather)),
  addTenHourWeather: weather => dispatch(addTenHourWeather(weather)),
  addTenDayWeather: weather => dispatch(addTenDayWeather(weather))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
