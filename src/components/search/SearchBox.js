
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SiteNav from '../site-nav/SiteNav';
import injectSheet from 'react-jss';
import styles from './SearchBox.style';

const SearchBox = ({ classes }) => {
  return (
    <div>
      <input placeholder="Search" spellcheck="false" type="text" value=""></input>
    </div>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(SearchBox);
