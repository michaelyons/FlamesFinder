import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './LocationSearch.css';
import { setCurrentLocation } from '../../actions/userActions';

export class LocationSearch extends Component {
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          className="search-input"
          onChange={this.handleChange}
          name="location"
          placeholder="Search Locations"
        />
      </form>
    );
  }
}
