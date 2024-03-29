export default (theme) => ({
  siteNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    transition: 'transform 400ms cubic-bezier(0.5, 0, 0.5, 1)',
  },
  siteNavItem: {
    position: 'relative',
    padding: '1rem',
    flexShrink: 0, /* flex: 1 0 auto; */

    fontFamily: theme.secondaryFont,
    // color: theme.colorPrimary,
    color: '#999',
    // textTransform: 'uppercase',
    fontSize: '0.75rem',
    fontWeight: 300,
    textDecoration: 'none',
    letterSpacing: '1px',
    '&:hover': {
      color: '#222',
    },
    '&.current': {
      color: '#777',
    },
    '&.current:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '12.5%',
      bottom: 0,
      height: '1px',
      width: '75%',
      background: '#777',
    }
  },
});
