import React, { Component } from 'react';
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
        <section>
          <p>{this.props.currentWeather.location}</p>
          <p>{this.props.currentWeather.currentTemp}</p>
          <p>{this.props.currentWeather.humidity}</p>
          <p>{this.props.currentWeather.highTemp}</p>
          <p>{this.props.currentWeather.lowTemp}</p>
          <p>{this.props.currentWeather.windSpeed}</p>
          <p>{this.props.currentWeather.sunrise}</p>
          <p>{this.props.currentWeather.sunset}</p>
          <p>{this.props.currentWeather.windDirection}</p>
          <p>{this.props.currentWeather.visibility}</p>
          <p>{this.props.currentWeather.currentConditions}</p>
          <p>{this.props.currentWeather.latitude}</p>
          <p>{this.props.currentWeather.longitude}</p>
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
        <button>Click for Nearby Campgrounds</button>
        <div>{displayCurrentWeather}</div>
        <div>{displayTenHourWeather}</div>
        <div>{displayTenDayWeather}</div>
      </div>
    );
  }
}
