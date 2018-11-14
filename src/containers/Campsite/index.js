import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingFire3 from '../../components/LoadingFire/LoadingFire3';
import { allWeatherData, getCampsite } from '../../helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';
import './index.css';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import Header from '../../components/Header';

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
    await this.populateCampsiteState();
  }

  populateCampsiteState = async () => {
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
  };

  render() {
    const { campsiteDetails, loading } = this.state;
    let displayChoosenCampsite;
    if (loading) {
      displayChoosenCampsite = <LoadingFire3 />;
    } else {
      const {
        facility,
        importantInformation,
        note
      } = campsiteDetails.attributes;
      const {
        streetAddress,
        city,
        zip,
        state
      } = campsiteDetails.elements[0].attributes;
      const campgroundName = facility;
      const campDetails = importantInformation;
      const importantCampInfo = note;
      const address = streetAddress;
      const zipCode = zip;
      const cityName = city;
      const stateName = state;
      const amenities = campsiteDetails.elements
        .slice(7, campsiteDetails.elements.length - 1)
        .map((amenity, index) => (
          <p key={`${amenity.attributes.name} - ${index}`}>
            {amenity.attributes.name}
          </p>
        ));
      displayChoosenCampsite = (
        <div>
          <p className="campground-name">{campgroundName}</p>
          <p className="campground-zip">
            {address} {zipCode}
          </p>
          <p className="campground-city">
            {cityName} {stateName}
          </p>
          <div className="camp-details">
            <h3>{campgroundName} Amenities </h3>
            {amenities}
          </div>
          <div className="camp-details2">
            <h3>{campgroundName} Details</h3>
            {campDetails}
          </div>
          <div className="camp-details3">
            <h3>{campgroundName} Bulletins</h3>
            {importantCampInfo}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <h2 className="campinfo-header">Campground Information</h2>
        <section>{displayChoosenCampsite}</section>
        {this.state.allWeatherDataArray.length === 3 && (
          <WeatherCard
            currentWeather={this.props.currentWeather}
            tenHourWeather={this.props.tenHourWeather}
            tenDayWeather={this.props.tenDayWeather}
          />
        )}
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
  tenHourWeather: PropTypes.array,
  contractID: PropTypes.string
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
