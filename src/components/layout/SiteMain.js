import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  siteMain: {
    extend: theme.layoutMaxWidth,
    flex: '1 0 auto',
    background: theme.backgroundColor,

    color: '#555',
    padding: {
      top: '56px',
      // right: theme.paddingLeftRight,
      bottom: 5,
      // left: theme.paddingLeftRight,
    },
  }
});

const SiteMain = ({ classes, children }) => (
  <div className={classes.siteMain}>
    {children}
  </div>
)

export default injectSheet(styles)(SiteMain);
