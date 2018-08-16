import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './ListProduct.style';
import emptyFunc from '../../core/empty-func';

const ListProduct = ({ classes, isLoading, items, handleClick }) => {
  if (isLoading) return <div>Loading...</div>
  if (!items || (items && items.length <= 0)) {
    return <div style={{
      padding: 30,
    }}>Nodata</div>
  }
  console.log(items);
  return (
    <section className={classes.listProduct}>
      {items && items.map(item => (
        <article key={item.id} className={classes.item}
          onClick={() => {
            handleClick(item)
          }}
        >
          <div className={classes.ctLeft}>
            <img className={classes.itemImage} src={item.urls.small} alt={item.id} />
          </div>
          <div className={classes.ctRight}>
            af
          </div>
        </article>
      ))}
    </section>
  )
};

ListProduct.defaultProps = {
  handleClick: emptyFunc,
};

ListProduct.propTypes = {
  classes: PropTypes.object,
  isLoading: PropTypes.bool,
  items: PropTypes.array,
  handleClick: PropTypes.func,
};

export default injectSheet(styles)(ListProduct);
