import React from 'react'
import styles from "./Navbar.module.css";

//Navbar Section
const Navbar = () => {
  return (
    //Using css module for styles
    <div className={styles.nav}>
        <h1>Calculator</h1>
    </div>
  );
};

export default Navbar;