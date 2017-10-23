import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import logoImage from '../images/logo.jpg';
import truckImage from '../images/truck2.jpeg'

export default class Home extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="banner">
      <img className="bodyImage" src={truckImage} />
      </div>
      </BaseLayout>
    );
  }
}
