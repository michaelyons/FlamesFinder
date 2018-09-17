import React, { Component } from 'react';
import { getCampsite } from '../../helper/apiCalls';
import PropTypes from 'prop-types';

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
    this.setState({
      campsiteDetails,
      loading: false
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
      importantCampInfo = campsiteDetails[0].attributes.note;
      campDetails = campsiteDetails[0].attributes.importantInformation;
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
        <h2>Campsite Info</h2>
        <h3>{campgroundName}</h3>
        <p>{importantCampInfo}</p>
        <section>{displayChoosenCampsite}</section>
        <p>{campDetails}</p>
      </div>
    );
  }
}

Campsite.propTypes = {
  facilityID: PropTypes.string
};

export default Campsite;
