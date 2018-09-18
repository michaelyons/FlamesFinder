import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingFire2 from '../../components/LoadingFire/LoadingFire2';
import { allWeatherData, getCampsite } from '../../helper/apiCalls';
import {
  addCurrentWeather,
  addTenHourWeather,
  addTenDayWeather
} from '../../actions/weatherActions';
import './index.css';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';

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
      displayChoosenCampsite = <LoadingFire2 />;
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
        .map(amenity => amenity.attributes.name);

      displayChoosenCampsite = (
        <div>
          <p>{campgroundName}</p>
          <p>
            {address} {zipCode}
          </p>
          <p>
            {cityName} {stateName}
          </p>
          <p>{campDetails}</p>
          <p>{importantCampInfo}</p>
          <p>{amenities}</p>
        </div>
      );
    }
    return (
      <div>
        <h2 className="campinfo-header">Campground Information</h2>
        <section>{displayChoosenCampsite}</section>
        <WeatherCard
          currentWeather={this.props.currentWeather}
          tenHourWeather={this.props.tenHourWeather}
          tenDayWeather={this.props.tenDayWeather}
        />
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
