// import breakPoint from './breakpoint.style';

export default (theme) => {
  return ({
    fixedBottom: {
      background: '#fff',
      width: '100%',
      position: 'fixed',
      bottom: '0',
      zIndex: '1000',
      // border: '1px solid rgba(48,51,57,.15)',
      boxShadow: '0 2px 5px rgba(0,0,0,.1)',
      overflow: 'hidden',
      transition: 'opacity .5s ease-in-out , transform .5s ease-in-out',
      fontSize: '1rem',
      padding: theme.paddingLeftRight,
      display: 'flex',
      flexWrap: 'nowrap',
    },
    btn: {
      flex: '1 1 0',
      display: 'block',
      maxWidth: '100%',
      cursor: 'pointer',
      minHeight: '2.25rem',
      lineHeight: '1.4rem',
      fontSize: '0.875rem',
      borderRadius: '2px',
      background: '#fff',
      textTransform: 'uppercase',
      // boxShadow: '0 1px 1px rgba(0,0,0,.1)',
      border: '1px solid #eee',
      borderLeft: 0,
      transition:
        'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    btnPrimary: {
      composes: '$btn',
      border: 0,
      background: theme.colorPrimary,
      color: '#fff',
    }
  });
}
