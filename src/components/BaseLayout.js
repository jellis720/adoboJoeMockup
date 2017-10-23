import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logoImage from '../images/logo.jpg';
import emaillogo from '../images/emaillogo.png';
import fblogo from '../images/fb.png';
import instalogo from '../images/insta.png';
import twitterlogo from '../images/twitter.png'

export default class BaseLayout extends Component {
  render(){
    return (
      <div>
        <nav>
          <div>
            <div className="navbar-fixed-top">
              <ul className="navbar-nav">
                <li className="nav-link">
                  <NavLink to="/About" className="navText">About</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Menu" className="navText">Menu</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/" className="navText"><img src={logoImage} className="logoImage"/></NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Schedule" className="navText">Schedule</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Contact" className="navText">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
          <a href="https://www.facebook.com/Adobo-Joe-Food-Truck-1496999187293585/"><img src={fblogo} className="footerLogo"/></a>
          <a href="https://twitter.com/adobojoe"><img src={twitterlogo} className="footerLogo"/></a>
          <a href="https://www.instagram.com/AdoboJoe/"><img src={instalogo} className="footerLogo"/></a>
          <a href="mailto:geronimoftc@gmail.com"><img src={emaillogo} className="footerLogo"/></a>
        </footer>
      </div>
    );
  }
}
