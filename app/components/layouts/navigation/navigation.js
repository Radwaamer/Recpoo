import React from "react";
import NavMenu from "./navMenu";
import styles from './nav.module.css'

const Navigation = () => {
  return(
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-dark bg-transparent py-3 position-absolute top-0 start-0 w-100`}>
      <div className="container">
        <span className="navbar-brand mb-0 h1 text-white">RECPOO</span>
        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`${styles.navbarToggle} navbar-toggler-icon text-white`}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end pt-3 pt-lg-0" id="navbarNavDropdown">
          <NavMenu styles={styles}/>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;
