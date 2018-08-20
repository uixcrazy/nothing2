import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './FormBooking.style';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

class FormBooking extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormControl
          className={classes.formControl}
          aria-describedby="name-helper-text"
        >
          <InputLabel
            FormLabelClasses={{
              root: classes.apLabel,
              focused: classes.apFocused,
            }}
            htmlFor="full-name"
          >
            Custom CSS
          </InputLabel>
          <Input
            id="full-name"
            placeholder="Full Name"
            disableUnderline={true}
            fullWidth={true}
            classes={{
              input: classes.apInput,
              underline: classes.apUnderline,
            }}
          />
          {/* <FormHelperText id="name-helper-text">Some important helper text</FormHelperText> */}
        </FormControl>
        {/* Phone number */}
        <FormControl
          className={classes.formControl}
        >
          <InputLabel
            FormLabelClasses={{
              root: classes.apLabel,
              focused: classes.apFocused,
            }}
            htmlFor="phone-number"
          >
            Phone Number
          </InputLabel>
          <Input
            id="phone-number"
            placeholder="Phone Number"
            disableUnderline={true}
            fullWidth={true}
            classes={{
              input: classes.apInput,
              underline: classes.apUnderline,
            }}
          />
        </FormControl>
        <div className={classes.btnGroup}>
          <Button variant="contained" color="primary" className={classes.btnPrimary}>
            Primary
          </Button>
        </div>



      </form>
    );
  }
}

FormBooking.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(FormBooking);
