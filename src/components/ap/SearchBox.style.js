
export default (theme) => {
  return ({
    searchBox: {
      flex: 1,
    },
    searchIcon: {
      position: 'absolute',
      fontSize: 34,
      height: '2.5rem',
      lineHeight: '2.5rem',
      color: '#ccc',
      paddingLeft: 5,
    },
    searchInput: {
      width: '100%',
      outline: 0,
      fontSize: '0.875rem',
      '-webkit-appearance': 'none',
      height: '2.5rem',
      lineHeight: '2.5rem',
      paddingLeft: '2.5rem',
      border: '1px solid rgba(151,151,151,.2)',
      borderRadius: '2px',
    }
  })
}