import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import SiteHeaderMobile from './SiteHeader';
import injectSheet, { ThemeProvider } from 'react-jss';
import { VARS, BREAKPOINTS, LAYOUT_MAXWIDTH } from './variables.style';
import '../../assets/styles/normalize.css';
import '../../assets/styles/nothing_reset.css';
import withRoot from './withRoot';

// theme for mobile
const theme = Object.assign({},
  VARS,
  {
    breakpoints: BREAKPOINTS,
    layoutMaxWidth: LAYOUT_MAXWIDTH
  },
  /*, and other function */)

const styles = {
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

class App extends Component {
  state = {
    isOpenSideBar: false,
  //   isModalOpen: false,
  };
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <SiteHeaderMobile />
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  navOpenState: PropTypes.object,
  onNavResize: PropTypes.func,
  children: PropTypes.node,
};

export default withRoot(injectSheet(styles)(App));
