import React, { Component } from 'react';
import { getCampsite } from '../../helper/apiCalls';

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
    console.log(campsiteDetails.elements);
    this.setState({
      campsiteDetails,
      loading: false
    });
  }

  render() {
    const { campsiteDetails, loading } = this.state;
    if (!loading) {
      const displayChoosedCampsite = campsiteDetails.map(site => {
        console.log(site);
      });
    }
    return (
      <div>
        <h2>Campsite Info</h2>
        {this.props.facilityID}
      </div>
    );
  }
}

export default Campsite;
