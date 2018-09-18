import React, { Component } from 'react';
import { getCampsiteData } from '../../helper/apiCalls';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateCampsites } from '../../actions/campsiteActions';
import LoadingSpin from '../../components/LoadingFire/LoadingSpin';

import './index.css';

export class CampsiteList extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    const campsites = await getCampsiteData();
    this.props.populateCampsites(campsites);
    this.setState({
      loading: false
    });
  }

  render() {
    const { campsites } = this.props;
    const { loading } = this.state;
    let displayCampsites;
    if (loading) {
      displayCampsites = <LoadingSpin />;
    } else {
      displayCampsites = campsites.slice(1, 30).map((campsite, index) => {
        const { facilityID, contractID, facilityName } = campsite.attributes;
        return (
          <div key={`${facilityID}-${index}`} className="campsite-list">
            <Link to={`/campsites/${contractID}/${facilityID}/`}>
              {facilityName}
            </Link>
          </div>
        );
      });
    }
    return (
      <div>
        <h2>Nearby Campgrounds</h2>
        <div>{displayCampsites}</div>
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
