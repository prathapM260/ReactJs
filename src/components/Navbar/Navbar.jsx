import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menuOpen state when the menu button is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {/* Toggle button for the menu */}
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
          onClick={toggleMenu} // Call the toggleMenu function when the button is clicked
          alt="menu-Btn"
        />
        {/* Conditionally render the menu items based on the menuOpen state */}
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
