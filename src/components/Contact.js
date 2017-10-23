import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import streetfoodfinderlogo from '../images/streetfoodfinderlogo.png';
import phonelogo from '../images/phonelogo.png';
import emaillogo from '../images/emaillogo.png';
import fblogo from '../images/fb.png';
import instalogo from '../images/insta.png';
import twitterlogo from '../images/twitter.png'

export default class Contact extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="contactContent">
        <h1 className="contactTitle"> Reach out or follow us!</h1>
        <div className="contactLinks">
        <div className="contactP">
          <a href="tel:9199243574"><img src={phonelogo} className="contactLogo"/></a><p>919-910-1928</p>
        </div>
        <div className="contactP">
          <a href="https://streetfoodfinder.com/AdoboJoe"><img src={streetfoodfinderlogo} className="contactLogo"/></a><p>Find us on StreetFoodFinder</p>
          </div>
        <div className="contactP">
          <a href="https://www.facebook.com/Adobo-Joe-Food-Truck-1496999187293585/"><img src={fblogo} className="contactLogo"/></a><p>Keep up to date with us on Facebook!</p>
        </div>
        <div className="contactP">
          <a href="https://twitter.com/adobojoe"><img src={twitterlogo} className="contactLogo"/></a><p>Follow us on Twitter!</p>
        </div>
        <div className="contactP">
          <a href="https://www.instagram.com/AdoboJoe/"><img src={instalogo} className="contactLogo"/></a><p>Like us on Instagram!</p>
        </div>
        <div className="contactP">
          <a href="mailto:geronimoftc@gmail.com"><img src={emaillogo} className="contactLogo"/></a><p>geronimoftc@gmail.com</p>
        </div>
      </div>
      </div>
      </BaseLayout>

    );
  }
}
