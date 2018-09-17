import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { allWeatherData, getCampsite } from '../../helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';
import './index.css';
import { WeatherCard } from '../../components/WeatherCard';

export class Campsite extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      campsiteDetails: {},
      allWeatherDataArray: []
    };
  }

  async componentDidMount() {
    const campsiteDetails = await getCampsite(
      this.props.contractID,
      this.props.facilityID
    );
    const { latitude, longitude } = campsiteDetails.attributes;
    const allWeatherDataArray = await allWeatherData(latitude, longitude);
    this.props.addCurrentWeather(allWeatherDataArray[0]);
    this.props.addTenHourWeather(allWeatherDataArray[1]);
    this.props.addTenDayWeather(allWeatherDataArray[2]);
    this.setState({
      campsiteDetails,
      loading: false,
      allWeatherDataArray
    });
  }

  render() {
    const { campsiteDetails, loading } = this.state;
    let displayChoosenCampsite;

    if (loading) {
      displayChoosenCampsite = <div>Loading...</div>;
    } else {
      const {
        facility,
        importantInformation,
        note
      } = campsiteDetails.attributes;
      const campgroundName = facility;
      const campDetails = importantInformation;
      const importantCampInfo = note;
      const streetAddress =
        campsiteDetails.elements[0].attributes.streetAddress;

      displayChoosenCampsite = (
        <div>
          <p>{campgroundName}</p>
          <p>{streetAddress}</p>
          <p>{campDetails}</p>
          <p>{importantCampInfo}</p>
        </div>
      );
    }
    return (
      <div>
        <div>
          <h2>Campsite Info</h2>

          <section>{displayChoosenCampsite}</section>
        </div>
        <div>
          <WeatherCard
            currentWeather={this.props.currentWeather}
            tenHourWeather={this.props.tenHourWeather}
            tenDayWeather={this.props.tenDayWeather}
          />
        </div>
      </div>
    );
  }
}

Campsite.propTypes = {
  facilityID: PropTypes.string,
  addCurrentWeather: PropTypes.func,
  addTenHourWeather: PropTypes.func,
  addTenDayWeather: PropTypes.func,
  currentWeather: PropTypes.object,
  tenDayWeather: PropTypes.array,
  tenHourWeather: PropTypes.array
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
)(Campsite);
