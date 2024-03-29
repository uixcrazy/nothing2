import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isMobile } from '../core/mobile-detect';
import App from './App';
import asyncComponent from '../components/DynamicImport';
const HomePage = asyncComponent(() => {
  if (isMobile) {
    return import('../pages/HomePage.mobile');
  }
  return import('../pages/HomePage');
});
const AboutUsPage = asyncComponent(() => import('../pages/AboutUsPage'));
const EyeStoryPage = asyncComponent(() => import('../pages/EyeStoryPage'));
const OriginalApp = asyncComponent(() => import('../components/original/App'));
const NotFound = asyncComponent(() => import('../pages/NotFound'));

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/eye-story" component={EyeStoryPage} />
            <Route exact path="/book-reviews" component={OriginalApp} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route component={NotFound}/>
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
