import React, { Component } from 'react';
import { getCampsiteData } from '../../helper/apiCalls';
import { Link } from 'react-router-dom';
const uuidv1 = require('uuid/v1');

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
        <div key={uuidv1()}>
          <Link to={`/campsites/${facilityId}`}>{facilityName}</Link>
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

export default CampsiteList;
