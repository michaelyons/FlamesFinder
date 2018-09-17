import React, { Component } from 'react';
import { getCampsite } from '../../helper/apiCalls';

import './index.css';

export class Campsite extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      campsiteDetails: []
    };
  }

  async componentDidMount() {
    const campsiteDetails = await getCampsite(this.props.facilityID);
    console.log(campsiteDetails);
    this.setState({
      campsiteDetails,
      loading: false
    });
  }

  render() {
    const { campsiteDetails, loading } = this.state;
    let displayChoosenCampsite;

    if (loading) {
      displayChoosenCampsite = <div>Loading...</div>;
    } else {
      displayChoosenCampsite = campsiteDetails.map((site, index) => {
        return (
          <div>
            <p>{site.attributes.facility}</p>
            <p>{site.attributes.note}</p>
          </div>
        );
      });
    }
    return (
      <div>
        <h2>Campsite Info</h2>
        {this.props.facilityID}
        <section>{displayChoosenCampsite}</section>
      </div>
    );
  }
}

export default Campsite;
