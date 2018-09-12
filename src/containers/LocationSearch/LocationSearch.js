import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './LocationSearch.css';
// import { setCurrentLocation } from '../../actions/userActions';
import Autosuggest from 'react-autosuggest';
import citiesList from '../../citiesList';

export class LocationSearch extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();
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

    return (
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
    );
  }
}
