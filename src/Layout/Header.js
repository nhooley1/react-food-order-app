import { Fragment } from 'react';
import mealImage from '../../src/assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals4u</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="food init" />
      </div>
    </Fragment>
  );
};

export default Header;
