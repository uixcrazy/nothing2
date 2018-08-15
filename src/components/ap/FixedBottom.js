
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './FixedBottom.style';
import emptyFunc from '../../core/empty-func';

const FixedBottom = ({ classes, handleHotline, handleSubmit }) => {
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
          handleSubmit()
        }}>
        download
      </button>
    </div>
  );
};

FixedBottom.defaultProps = {
  handleHotline: emptyFunc,
  handleSubmit: emptyFunc,
};

FixedBottom.propTypes = {
  classes: PropTypes.object,
  handleHotline: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default injectSheet(styles)(FixedBottom);