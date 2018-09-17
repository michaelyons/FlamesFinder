import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './LocationSearch.css';
import { WeatherCard } from '../../components/WeatherCard';

import { allWeatherData } from '../../helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';

export class LocationSearch extends Component {
  populateWeather = async () => {
    try {
      const allWeatherDataArray = await allWeatherData(this.state.value);
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
      <div>
        <WeatherCard
          currentWeather={this.props.currentWeather}
          tenHourWeather={this.props.tenHourWeather}
          tenDayWeather={this.props.tenDayWeather}
        />
      </div>
    );
  }
}

LocationSearch.propTypes = {
  addCurrentWeather: PropTypes.func,
  addTenHourWeather: PropTypes.func,
  addTenDayWeather: PropTypes.func,
  currentWeather: PropTypes.object,
  tenDayWeather: PropTypes.array,
  tenHourWeather: PropTypes.array
};

export const mapStateToProps = state => ({
  currentWeather: state.currentWeather,
  tenHourWeather: state.tenHourWeather,
  tenDayWeather: state.tenDayWeather
});

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather)),
  addTenHourWeather: weather => dispatch(addTenHourWeather(weather)),
  addTenDayWeather: weather => dispatch(addTenDayWeather(weather))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSearch);
