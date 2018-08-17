

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './FormBooking.style';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class FormBooking extends Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Full Name"
          className={classes.textField}
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.apRoot,
              input: classes.apInput,
              focused: classes.apFormLabelFocus,
            },
          }}
          InputLabelProps={{
            // shrink: true,
            className: classes.apFormLabel,
          }}
        />

        <FormControl>
          <InputLabel
            FormLabelClasses={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="custom-css-input"
          >
            Custom CSS
          </InputLabel>
          <Input
            disableUnderline={true}
            fullWidth={true}
            classes={{
              input: classes.apInput,
              underline: classes.cssUnderline,
            }}
            id="custom-css-input"
          />
        </FormControl>

      </form>
    );
  }
}

FormBooking.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(FormBooking);
