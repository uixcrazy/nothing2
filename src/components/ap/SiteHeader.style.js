// import breakPoint from './breakpoint.style';

export default (theme) => {
  return ({
    siteHeader: {
      width: '100%',
      height: '3.5rem',
      display: 'flex',
      color: '#757575',
      background: '#fff',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 10,
      borderBottom: '1px solid rgba(48,51,58,.1)',
      padding: {
        top: 2,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    sideMenu: {
      width: 250,
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
    btnMenu: {
    }
  });
}
