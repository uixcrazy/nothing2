
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './FixedBottom.style';
import emptyFunc from '../../core/empty-func';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const handleOpenFormTemp = (side, open) => () => {
  this.setState({
    [side]: open,
  });
};

const FixedBottom = ({ classes, handleHotline, handleOpenForm }) => {
  return (
    <div className={classes.fixedBottom}>
      <button className={classes.btnPrimary}
        onClick={() => {
          handleHotline()
        }}>
        share
      </button>
      <button className={classes.btn}
        onClick={() => {
          handleOpenForm();
        }}>
        download
      </button>
    </div>
  );
};

FixedBottom.defaultProps = {
  handleHotline: emptyFunc,
  handleOpenForm: handleOpenFormTemp,
};

FixedBottom.propTypes = {
  classes: PropTypes.object,
  handleHotline: PropTypes.func,
  handleOpenForm: PropTypes.func,
};

export default injectSheet(styles)(FixedBottom);