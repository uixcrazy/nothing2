
export default (theme) => {
  return ({
    item: {
      padding: theme.paddinglr2,
      // borderBottom: '1px solid #eee',
      '&:nth-child(2n)': {
        background: '#f3f4f7',
      },
    },
    itemCt: {
      display: 'flex',
    },
    ctLeft: {
      minWidth: '5.5rem',
      width: '30%',
      display: 'inline-block',
    },
    ctRight: {
      flex: 1,
      paddingLeft: '.5rem',
    },
    itemImage: {
      display: 'block',
      height: 'auto',
      width: '100%',
    },
    itemTitle: {
      fontSize: '0.875em',
      fontWeight: 500,
      paddingBottom: '4px',
    },
    itemSubTitle: {
      fontSize: '0.75rem',
      color: '#777',
      paddingBottom: '4px',
    },
    itemPrice: {
      fontSize: '.875em',
      color: '#e53935',
    },
  })
}