import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../WeatherCard/WeatherCard.css';
const uuidv1 = require('uuid/v1');

export default class WeatherCard extends Component {
  render() {
    let displayCurrentWeather;
    let displayTenHourWeather;
    let displayTenDayWeather;

    if (!this.props.currentWeather) {
      displayCurrentWeather = <p className="loading-fetch">Loading...</p>;
    } else {
      displayCurrentWeather = (
        <section className="current-weather-card">
          <p>{this.props.currentWeather.currentWeather}</p>
          <p>{this.props.currentWeather.currentTemp}</p>
          <p>{this.props.currentWeather.currentConditions}</p>
          <p>{this.props.currentWeather.humidity}</p>
          <p>{this.props.currentWeather.highTemp}</p>
          <p>{this.props.currentWeather.lowTemp}</p>
          <p>{this.props.currentWeather.windSpeed}</p>
          <p>{this.props.currentWeather.sunrise}</p>
          <p>{this.props.currentWeather.sunset}</p>
          <p>{this.props.currentWeather.windDirection}</p>
          <p>{this.props.currentWeather.visibility}</p>
        </section>
      );
    }

    if (!this.props.tenHourWeather) {
      displayTenHourWeather = <p className="loading-fetch">Loading...</p>;
    } else {
      displayTenHourWeather = this.props.tenHourWeather.map(weather1 => {
        return (
          <section key={uuidv1()} className="hour-weather-card">
            <p>{`${weather1.time}`}</p>
            <p>{`${weather1.temp}`}</p>

            <img
              src={require(`../../images/${weather1.icon}.png`)}
              alt="weather icon"
            />
          </section>
        );
      });
    }
    if (!this.props.tenDayWeather) {
      displayTenDayWeather = <p className="loading-fetch">Loading...</p>;
    } else {
      displayTenDayWeather = this.props.tenDayWeather.map(weather2 => {
        return (
          <section key={uuidv1()} className="day-weather-card">
            <p>{`${weather2.day}`}</p>
            <p>{`${weather2.high}`}</p>
            <p>{`${weather2.low}`}</p>

            <img
              src={require(`../../images/${weather2.icon}.png`)}
              alt="weather icon"
            />
          </section>
        );
      });
    }
    return (
      <div>
        <div>{displayCurrentWeather}</div>
        <div className="ten-hour-container">{displayTenHourWeather}</div>
        <div className="ten-day-container">{displayTenDayWeather}</div>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  currentWeather: PropTypes.object,
  tenHourWeather: PropTypes.array,
  tenDayWeather: PropTypes.array
};
