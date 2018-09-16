import React, { Component } from 'react';
import { getCampsite } from '../../helper/apiCalls';

export class Campsite extends Component {
  constructor() {
    super();
    this.state = {
      campsiteDetails: {}
    };
  }

  async componentDidMount() {
    const campsite = await getCampsite(this.props.facilityID);
    this.setState({
      campsiteDetails: campsite
    });
  }

  render() {
    return (
      <div>
        <h2>Campsite Info</h2>
        {this.props.facilityID}
      </div>
    );
  }
}

export default Campsite;
