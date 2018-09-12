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
const uuidv1 = require('uuid/v1');

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

    // let displayCurrentWeather;

    let displayTenHourWeather;

    let displayTenDayWeather;

    // if (!this.props.currentWeather) {
    //   displayCurrentWeather = <p className="loading-fetch">Loading...</p>;
    // } else {
    //   displayCurrentWeather = (
    //     <section>
    //       <p>{this.currentWeather.location}</p>
    //     </section>
    //   );
    // }

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
      displayTenDayWeather = this.props.tenDayWeather.map((weather2, index) => {
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
        {/* <div>{displayCurrentWeather}</div> */}
        <div>{displayTenHourWeather}</div>
        <div>{displayTenDayWeather}</div>
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
