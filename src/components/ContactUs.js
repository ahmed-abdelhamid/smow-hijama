import React, { Component } from 'react';

import Slider from './Slider';
import Location from './Location';

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <Slider />
        <div className="container">
          <div className="row text-center">
            <Location />
            <div className="col-md-6">Address Details</div>
          </div>
        </div>
      </div>
    );
  }
}
