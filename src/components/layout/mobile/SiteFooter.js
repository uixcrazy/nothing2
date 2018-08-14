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

// background: #fff;
//     width: 100%;
//     height: 60px;
//     position: fixed;
//     bottom: 0;
//     z-index: 1000;
//     border: 1px solid rgba(48,51,57,.15);
//     box-shadow: 0 2px 5px rgba(0,0,0,.1);
//     overflow: hidden;
//     transition: opacity .5s ease-in-out , transform .5s ease-in-out;
//     font-size: 16px;

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
