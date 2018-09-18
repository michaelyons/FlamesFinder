import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { populateCampsites } from '../../actions/campsiteActions';
import { getCampsiteData, googleMap } from '../../helper/apiCalls';

import LoadingFire from '../../components/LoadingFire/LoadingFire';
import './fire.gif';
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
    const campsites = await getCampsiteData();
    this.props.populateCampsites(campsites);
    const maps = await googleMap();
    this.setState({
      loading: false,
      mapsImage: maps
    });
  }

  render() {
    const { campsites } = this.props;
    const { loading } = this.state;
    let displayCampsites;
    if (loading) {
      displayCampsites = <LoadingFire />;
    } else {
      displayCampsites = campsites.slice(1, 30).map((campsite, index) => {
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
        <h2>Nearby Campgrounds</h2>
        <div className="campground-list">{displayCampsites}</div>
        <img src={this.state.mapsImage} />
      </div>
    );
  }
}

CampsiteList.propTypes = {
  populateCampsites: PropTypes.func,
  campsites: PropTypes.array
};

const mapStateToProps = state => ({
  campsites: state.campsites
});

const mapDispatchToProps = dispatch => ({
  populateCampsites: campsite => dispatch(populateCampsites(campsite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampsiteList);
