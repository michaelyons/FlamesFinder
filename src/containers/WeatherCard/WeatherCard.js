import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allWeatherData } from '../../helper/apiCalls';
import { addCurrentWeather } from '../../actions/weatherActions';

export class WeatherCard extends Component {
  constructor() {
    super();
    this.state = {
      errors: ''
    };
  }

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
    return <div />;
  }
}

WeatherCard.propTypes = {
  addCurrentWeather: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  addCurrentWeather: weather => dispatch(addCurrentWeather(weather))
});

export default connect(
  null,
  mapDispatchToProps
)(WeatherCard);
