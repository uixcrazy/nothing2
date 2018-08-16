import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './SuggestLocation.style';
import emptyFunc from '../../core/empty-func';

const SuggestLocation = ({ classes, isLoading, title, items, handleClick }) => {
  if (isLoading) return <div>Loading...</div>
  if (!items || (items && items.length <= 0)) {
    return <div style={{
      padding: 30,
    }}>Nodata</div>
  }
  console.log(items);
  return (
    <section>
      <h3 className={classes.title}>{title}</h3>
      <ul className={classes.row}>
        {items && items.map(item => (
          <li key={item} className={classes.col}
            onClick={() => {
              handleClick(item)
            }}
          >
            <span className={classes.item}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
};

SuggestLocation.defaultProps = {
  handleClick: emptyFunc,
  title: 'Famous Cities Around the World',
  items: [
    'Tokyo',
    'Istanbul',
    'Kuala Lumpur',
    'Singapore',
    'New York',
    'Dubai',
    'Los Angeles',
    'Barcelona',
    'Copenhagen',
    'Brussels'
  ]
};

SuggestLocation.propTypes = {
  classes: PropTypes.object,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  items: PropTypes.array,
  handleClick: PropTypes.func,
};

export default injectSheet(styles)(SuggestLocation);
