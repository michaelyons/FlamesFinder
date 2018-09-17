import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components/WeatherCard.css';

const uuidv1 = require('uuid/v1');

export class WeatherCard extends Component {
  render() {
    let displayCurrentWeather;

    let displayTenHourWeather;

    let displayTenDayWeather;

    if (!this.props.currentWeather) {
      displayCurrentWeather = <p className="loading-fetch">Loading...</p>;
    } else {
      displayCurrentWeather = (
        <section className="current-weather-card">
          <p>Current Weather</p>
          <p>{this.props.currentWeather.currentTemp}</p>
          <p>{this.props.currentWeather.currentConditions}</p>
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
          <section key={uuidv1()}>
            <p>{`${weather1.time}`}</p>
            <p>{`${weather1.temp}`}</p>
            <p>{`${weather1.feelsLike}`}</p>
            <p>{`${weather1.averageHumidity}`}</p>
            <p>{`${weather1.condition}`}</p>
            <p>{`${weather1.averageWind}`}</p>
            <p>{`${weather1.uvIndex}`}</p>
          </section>
        );
      });
    }
    if (!this.props.tenDayWeather) {
      displayTenDayWeather = <p className="loading-fetch">Loading...</p>;
    } else {
      displayTenDayWeather = this.props.tenDayWeather.map(weather2 => {
        return (
          <section key={uuidv1()}>
            <p>{`${weather2.day}`}</p>
            <p>{`${weather2.date}`}</p>
            <p>{`${weather2.high}`}</p>
            <p>{`${weather2.low}`}</p>
            <p>{`${weather2.conditions}`}</p>
            <p>{`${weather2.averageWind}`}</p>
          </section>
        );
      });
    }
    return (
      <div>
        <div>{displayCurrentWeather}</div>
        <div>{displayTenHourWeather}</div>
        <div>{displayTenDayWeather}</div>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  currentWeather: PropTypes.object,
  tenHourWeather: PropTypes.array,
  tenDayWeather: PropTypes.array
};
