import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../WeatherCard/WeatherCard.css';

const uuidv1 = require('uuid/v1');

export class WeatherCard extends Component {
  render() {
    let displayCurrentWeather1;
    let displayCurrentWeather2;
    let displayTenHourWeather;
    let displayTenDayWeather;

    if (!this.props.currentWeather) {
      displayCurrentWeather1 = <p className="loading-fetch">Loading...</p>;
    } else {
      displayCurrentWeather1 = (
        <section className="current-weather-card">
          <p>Current Weather</p>
          <p>{this.props.currentWeather.currentTemp}</p>
          <p>{this.props.currentWeather.currentConditions}</p>
        </section>
      );
      displayCurrentWeather2 = (
        <section>
          <p>Humidity: {this.props.currentWeather.humidity}</p>
          <p>High: {this.props.currentWeather.highTemp}</p>
          <p>Low: {this.props.currentWeather.lowTemp}</p>
          <p>Wind Speed: {this.props.currentWeather.windSpeed}</p>
          <p>Sunrise: {this.props.currentWeather.sunrise}</p>
          <p>Sunset: {this.props.currentWeather.sunset}</p>
          <p>Wind Direction: {this.props.currentWeather.windDirection}</p>
          <p>Visibility: {this.props.currentWeather.visibility}</p>
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
            <p>{`${weather1.condition}`}</p>
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
            <p>{`${weather2.date}`}</p>
            <p>{`${weather2.high}`}</p>
            <p>{`${weather2.low}`}</p>
            <p>{`${weather2.conditions}`}</p>
          </section>
        );
      });
    }
    return (
      <div>
        <div>{displayCurrentWeather1}</div>
        <div className="ten-hour-container">{displayTenHourWeather}</div>
        <div className="ten-day-container">{displayTenDayWeather}</div>
        <div>{displayCurrentWeather2}</div>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  currentWeather: PropTypes.object,
  tenHourWeather: PropTypes.array,
  tenDayWeather: PropTypes.array
};
