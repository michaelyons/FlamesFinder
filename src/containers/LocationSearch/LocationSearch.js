import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentLocation } from '../../actions/userActions';

export class LocationSearch extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { location } = this.state;
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
          placeholder="Search Locations Here"
        />
      </form>
    );
  }
}
