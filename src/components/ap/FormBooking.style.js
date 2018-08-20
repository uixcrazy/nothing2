// import breakPoint from './breakpoint.style';

export default (theme) => {
  return ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      width: '100%',
      // margin: {
      //   bottom: '.5rem',
      // },
    },
    apInput: {
      borderRadius: 3,
      border: '1px solid #ced4da',
      fontSize: '.875em',
      padding: '10px 12px',
      width: '100%',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: '#31b0d5',
        // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        outline: 'none',
      },
    },
    apLabel: {
      top: 5,
      left: 12,
      fontSize: '.875em',
      '&$apFocused': {
        top: 3,
        left: 0,
      },
    },
    apFocused: {},
    apUnderline: {
      borderBottom: 0,
      '&:after': {
        borderBottom: 0,
        borderBottomColor: 'cyan',
      },
    },
    btnGroup: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: '1rem',
    },
    btnPrimary: {
      minWidth: '8rem',
      color: '#fff',
      textTransform: 'initial',
      display: 'flex',
      justifyContent: 'center',
    }
  })
};