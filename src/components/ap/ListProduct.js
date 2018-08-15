
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './ListProduct.style';
import emptyFunc from '../../core/empty-func';

const ListProduct = ({ classes, isLoaded, listProduct, handleClick }) => {
  if (!isLoaded) return <div>Loading...</div>
  // xu ly truong hop noData
  // listProduct
  return (
    <section className={classes.listProduct}>
      {listProduct && listProduct.map(item => (
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
  isLoaded: PropTypes.bool,
  listProduct: PropTypes.array,
  handleClick: PropTypes.func,
};

export default injectSheet(styles)(ListProduct);
