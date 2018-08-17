// import breakPoint from './breakpoint.style';

export default (theme) => {
  return ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    apRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    textField: {
      width: '100%',
    },
    apInput: {
      borderRadius: 3,
      border: '1px solid #ced4da',
      fontSize: '.875em',
      padding: '10px 12px',
      width: '100%',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
    apFormLabel: {
      top: 12,
      left: 12,
      fontSize: '.875em',
    },
    apFormLabelFocus: {
      top: 0,
    },

    cssLabel: {
      top: 5,
      left: 12,
      fontSize: '.875em',
      '&$cssFocused': {
        top: 0,
        left: 0,
      },
    },
    cssFocused: {},
    cssUnderline: {
      borderBottom: 0,
      '&:after': {
        borderBottom: 0,
        borderBottomColor: 'cyan',
      },
    },
  })
};