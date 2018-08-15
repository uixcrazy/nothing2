import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  siteFooter: {
    width: '100%',
    flexShrink: 0,
    fontFamily: theme.secondaryFont,
    background: theme.backgroundColor,
    fontSize: '.625rem',
    lineHeight: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '.125em',
    textAlign: 'center',
    borderTop: '1px solid #c9c9c9',
    padding: '1rem',
  }
})


// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);


const SiteFooterMobile = ({ classes }) => (
  <footer className={classes.siteFooter}>
    <button>share</button>
    <button>download</button>
  </footer>
)

SiteFooterMobile.propTypes = {
  classes: PropTypes.object,
};


export default injectSheet(styles)(SiteFooterMobile);
