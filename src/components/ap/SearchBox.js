
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './SearchBox.style';
import SearchIcon from '@material-ui/icons/Search';

class SearchBox extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchBox}>
        <SearchIcon  className={classes.searchIcon}/>
        <input className={classes.searchInput}
          placeholder="Search" type="search" value="" />
      </div>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(SearchBox);
