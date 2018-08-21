export default (theme) => {
  console.log(theme.palette);
  return ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'fixed',
      top: '56px',
      zIndex: 10,
    },
  })
}
