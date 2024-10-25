import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import { ReactComponent as Search } from "../assets/search.svg";

let Navbar = () => {
  let [showSearch, setShowSearch] = useState(false);
  let [showAboutDropdown, setShowAboutDropdown] = useState(false);
  let [showServicesDropdown, setShowServicesDropdown] = useState(false);
  let [showCalculatorsDropdown, setShowCalculatorsDropdown] = useState(false);
  let handleShowSearch = () => {
    if (showSearch) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  };
  return (
    <div className={styles.secondNavbar}>
      <a href="#" className={styles.logo}>
        <img src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
      </a>
      <p className={styles.contactNumber}>142536978</p>
      <div className={styles.mainNavbar}>
        <input
          type="search"
          placeholder="Search..."
          className={`${styles.searchInput} ${
            showSearch ? styles.showSearchInput : null
          }`}
        />
        <Search width={20} height={20} onClick={handleShowSearch} />
        <div className={styles.relativeDiv}>
          <a
            href="/"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            ABOUT
          </a>
          <div
            className={`${styles.aboutDropdown} ${
              showAboutDropdown ? styles.showAboutDropdown : null
            }`}
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
            <a href="/">Link 4</a>
            <a href="/">Link 5</a>
          </div>
        </div>
        <div className={styles.relativeDiv}>
          <a
            href="/"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            SERVICES
          </a>
          <div
            className={`${styles.servicesDropdown} ${
              showServicesDropdown ? styles.showServicesDropdown : null
            }`}
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          ></div>
        </div>

        <a href="/">BLOGS</a>
        <a href="/">NEWS</a>
        <div className={styles.relativeDiv}>
          <a
            href="/"
            onMouseEnter={() => setShowCalculatorsDropdown(true)}
            onMouseLeave={() => setShowCalculatorsDropdown(false)}
          >
            CALCULATORS
          </a>
          <div
            className={`${styles.calculatorsDropdown} ${
              showCalculatorsDropdown ? styles.showCalculatorsDropdown : null
            }`}
            onMouseEnter={() => setShowCalculatorsDropdown(true)}
            onMouseLeave={() => setShowCalculatorsDropdown(false)}
          >
            <a href="/">BC PNP Calculator</a>
            <a href="/">CLB Calculator</a>
            <a href="/">FSW Calculator</a>
          </div>
        </div>

        <a href="/">CONTACT</a>
        <div>
          <button className={styles.bookButton}>BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;