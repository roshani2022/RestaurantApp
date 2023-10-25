import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment >
      <header className={classes.header}>
        <h1>Welcome to Food World!!!</h1>
        <HeaderCartButton onClick ={props.onShowCart}/>
      </header>
      <div>
        <img  className={classes['main-image']} src={mealsImage} alt="header"/>
      </div>
    </Fragment>
  );
};
export default Header;
