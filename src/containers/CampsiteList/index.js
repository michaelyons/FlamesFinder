import React, { Component } from 'react';
import { getCampsiteData, googleMap } from '../../helper/apiCalls';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateCampsites } from '../../actions/campsiteActions';
import LoadingFire2 from '../../components/LoadingFire/LoadingFire2';
import Header from '../../components/Header';

import './index.css';

export class CampsiteList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      mapsImage: ''
    };
  }

  async componentDidMount() {
    await this.populateCampData();
  }

  populateCampData = async () => {
    const campsites = await getCampsiteData();
    this.props.populateCampsites(campsites);
    const maps = await googleMap();
    this.setState({
      loading: false,
      mapsImage: maps
    });
  };

  render() {
    const { campsites } = this.props;
    const { loading } = this.state;
    let displayCampsites;
    if (loading) {
      displayCampsites = <LoadingFire2 />;
    } else {
      displayCampsites = campsites.slice(5, 30).map((campsite, index) => {
        const { facilityID, contractID, facilityName } = campsite.attributes;
        const cleanName =
          facilityName.charAt(0).toUpperCase() +
          facilityName.substr(1).toLowerCase();
        return (
          <div key={`${facilityID}-${index}`} className="campsite-list">
            <Link to={`/campsites/${contractID}/${facilityID}/`}>
              {cleanName}
            </Link>
          </div>
        );
      });
    }
    return (
      <div>
        <Header />
        <h2>Nearby Campgrounds</h2>
        <img src={this.state.mapsImage} alt="" />
        <div className="camp-container">
          <div className="campground-list">{displayCampsites}</div>
        </div>
      </div>
    );
  }
}

CampsiteList.propTypes = {
  populateCampsites: PropTypes.func,
  campsites: PropTypes.array
};

export const mapStateToProps = state => ({
  campsites: state.campsites
});

export const mapDispatchToProps = dispatch => ({
  populateCampsites: campsite => dispatch(populateCampsites(campsite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampsiteList);
