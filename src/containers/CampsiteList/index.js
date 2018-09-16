import React, { Component } from 'react';
import { getCampsiteData } from '../../helper/apiCalls';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { populateCampsites } from '../../actions/campsiteActions';

export class CampsiteList extends Component {
  async componentDidMount() {
    const campsites = await getCampsiteData();
    this.props.populateCampsites(campsites);
  }

  render() {
    const { campsites } = this.props;
    const displayCampsites = campsites.map((campsite, i) => {
      const { facilityID, facilityName } = campsite.attributes;
      return (
        <div key={`${facilityID}-${i}`}>
          <Link to={`/campsites/${facilityID}`}>{facilityName}</Link>
        </div>
      );
    });
    return (
      <div>
        <h2>Nearby Campsites</h2>
        <div>{displayCampsites}</div>
      </div>
    );
  }
}

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
