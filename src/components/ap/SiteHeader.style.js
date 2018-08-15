// import breakPoint from './breakpoint.style';

export default (theme) => {
  return ({
  // const standardStyle = {
    siteHeader: {
      // extend: theme.layoutMaxWidth,
      width: '100%',
      display: 'flex',
      color: '#757575',
      background: '#fff',
      // background: theme.backgroundColor,
      alignItems: 'center',
      // boxShadow: '0 1px 0 rgba(93, 96, 99, .1)',
      zIndex: 1,
      padding: {
        right: theme.paddingLeftRight,
        left: theme.paddingLeftRight,
      },
    },
    logo: {
      '& > a': {
        height: '1.75rem',
        width: '2rem',
        display: 'block',
        backgroundImage: 'url(https://shentonista.sg/app/themes/shentonista-theme/assets/images/shentonista-logo.svg)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        fontSize: 0,

        backgroundColor: '#222',
      }
    },
    contentMenu: {
      flex: '1 0 0',
    }
  });
}

// export default (theme) => {
//   const backgroundColor = theme.backgroundColor;
//   const customStyle = backgroundColor.callFnc();
//   return Object.assign({}, standardStyle, customStyle);
// };
