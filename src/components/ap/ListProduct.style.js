
export default (theme) => {
  return ({
    item: {
      display: 'flex',
      padding: {
        top: '.5rem',
        bottom: '.5rem',
      },
      borderBottom: '1px solid #eee',
    },
    ctLeft: {
      width: '5.5rem',
      display: 'inline-block',
    },
    ctRight: {
      flex: 1,
    },
    itemImage: {
      display: 'block',
      height: 'auto',
      width: '100%',
    }
  })
}