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
      campsiteDetails: [],
      allWeatherDataArray: []
    };
  }

  async componentDidMount() {
    const campsiteDetails = await getCampsite(this.props.facilityID);
    const { latitude, longitude } = campsiteDetails[0].attributes;
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
    let campgroundName;
    let importantCampInfo;
    let campDetails;

    if (loading) {
      displayChoosenCampsite = <div>Loading...</div>;
    } else {
      campgroundName = campsiteDetails[0].attributes.facility;
      campDetails = campsiteDetails[0].attributes.importantInformation;
      importantCampInfo = campsiteDetails[0].attributes.note;
      displayChoosenCampsite = campsiteDetails[0].elements.map(
        (site, index) => {
          return (
            <div key={`${site}-${index}`}>
              <p>
                {site.attributes.streetAddress} {site.attributes.zip}
              </p>
              <p>
                {site.attributes.city} {site.attributes.state}
              </p>
              <p>{site.attributes.number}</p>
              <p>{site.attributes.name}</p>
            </div>
          );
        }
      );
    }
    return (
      <div>
        <div>
          <h2>Campsite Info</h2>
          <h3>{campgroundName}</h3>
          <section>{displayChoosenCampsite}</section>
          <p>{campDetails}</p>
          <p>{importantCampInfo}</p>
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
