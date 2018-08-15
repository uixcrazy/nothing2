
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import injectSheet from 'react-jss';
import styles from './SiteHeader.style';
import SearchBox from './SearchBox';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class SiteHeader extends Component {
  state = {
    openDrawer: false,
  };

  toggleDrawer = (openDrawer) => () => {
    this.setState({
      openDrawer,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <header className={classes.siteHeader}>
          <div className={classes.logo}>
            <NavLink to="/" activeClassName="current">SHENTONISTA</NavLink>
          </div>
          <SearchBox/>
          <IconButton color="inherit" onClick={this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </header>
        <SwipeableDrawer
          anchor="right"
          open={this.state.openDrawer}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.sideMenu}>
              <List>{mailFolderListItems}</List>
              <Divider />
              <List>{otherMailFolderListItems}</List>
            </div>
          </div>
        </SwipeableDrawer>
      </Fragment>
    );
  }
}

SiteHeader.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(SiteHeader);