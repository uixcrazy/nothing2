
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SearchBox from '../ap/SearchBox'
import SiteNav from '../site-nav/SiteNav';
import injectSheet from 'react-jss';
import styles from './SiteHeader.style';

const SiteHeader = ({ classes }) => {
  return (
    <header className={classes.siteHeader}>
      <div className={classes.branding}>
        <NavLink to="/" activeClassName="current">SHENTONISTA</NavLink>
      </div>
      <div className={classes.contentMenu}>
        <SearchBox />
        <SiteNav />
      </div>
    </header>
  );
};

SiteHeader.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(SiteHeader);