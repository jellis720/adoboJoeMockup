import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from'./components/Contact';
import Schedule from './components/Schedule';

ReactDOM.render(
  <BrowserRouter basename="adobeJoeMockup">
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Menu" component={Menu}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Schedule" component={Schedule}/>
      </Switch>
    </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
