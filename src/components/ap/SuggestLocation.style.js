
export default (theme) => {
  return ({
    title: {
      padding: '30px 10px 5px',
      fontSize: '1.125rem',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    col: {
      flex: '1 0 50%',
      padding: '0 10px 10px',
      listStyle: 'none',
      maxWidth: '50%'
    },
    item: {
      display: 'block',
      width: '100%',
      lineHeight: '36px',
      background: '#f3f4f7',
      padding: '0 10px',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      textAlign: 'center'
    }
  })
}