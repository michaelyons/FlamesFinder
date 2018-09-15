import React, { Component } from 'react';
import { getCampsiteData } from '../../helper/apiCalls';
import { Link } from 'react-router-dom';

export class CampsiteList extends Component {
  constructor() {
    super();
    this.state = {
      campsites: []
    };
  }

  async componentDidMount() {
    const campsites = await getCampsiteData();
    this.setState({
      campsites
    });
  }

  render() {
    const { campsites } = this.state;
    const displayCampsites = campsites.slice(0, 20).map(campsite => {
      const { facilityId, facilityName } = campsite.attributes;
      return (
        <div>
          <Link to={`/campsites/${facilityId}`}>{facilityName}</Link>
        </div>
      );
    });
    return (
      <div>
        <h2>Nearby campsites</h2>
        <div>{displayCampsites}</div>
      </div>
    );
  }
}

export default CampsiteList;
