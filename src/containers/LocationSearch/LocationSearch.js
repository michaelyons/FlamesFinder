import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './LocationSearch.css';
import Autosuggest from 'react-autosuggest';
import citiesList from '../../citiesList';
import { allWeatherData } from '../../helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';

class LocationSearch extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

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

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.populateWeather(this.state.value);
    this.setState({
      value: '',
      suggestions: []
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestionValue = suggestion => suggestion;

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : citiesList.data.filter(
        city => city.toLowerCase().slice(0, inputLength) === inputValue
      );
  };

  renderSuggestion = suggestion => <p>{suggestion}</p>;

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search Locations',
      value,
      onChange: this.onChange
    };
    let displayWeather;

    if (!this.props.tenDayWeather) {
      displayWeather = <p className="loading-fetch">Loading...</p>;
    } else {
      displayWeather = this.props.tenDayWeather.map(weather => {
        console.log(weather);
        return <p>{`${weather.day}`}</p>;
      });
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="location-search">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
          <button>Submit</button>
        </form>
        <div>{displayWeather}</div>
      </div>
    );
  }
}

LocationSearch.propTypes = {
  addCurrentWeather: PropTypes.func.isRequired,
  addTenHourWeather: PropTypes.func.isRequired,
  addTenDayWeather: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  // currentWeather: state.currentWeather,
  // tenHourWeather: state.tenHourWeather,
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
