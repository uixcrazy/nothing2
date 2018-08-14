
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './FixedBottom.style';
// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
const FixedBottom = ({ classes, handleHotline, handleSubmit }) => {
  return (
    <div>
      <button onClick={() => {handleHotline()}}>share</button>
      <button>download</button>
    </div>
  );
};

FixedBottom.propTypes = {
  classes: PropTypes.object,
  handleHotline: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default injectSheet(styles)(FixedBottom);