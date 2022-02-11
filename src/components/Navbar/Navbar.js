import React from 'react';
import classes from "./Navbar.module.css";
import search_icon from "../../images/search.png";
import settings_icon from "../../images/settings_icon.svg"
import addIcon from "../../images/add.svg"
import beam from "../../images/beam.svg"
import PropTypes from 'prop-types';

const Navbar=({isDarkMode,DarkModeHandler})=> {
  const modeClickHandler=()=>{
    DarkModeHandler();
  }
  return (
    <div className={isDarkMode?classes.nav_dark:classes.nav}>
      
      <div className={isDarkMode?classes.bar_dark:classes.bar}>
        <img src={search_icon}/>
        <input className={isDarkMode?`${classes.searchbar_dark}`:classes.searchbar} type="text" title="Search" placeholder='Search...'/>
     </div>
     
     <div className={classes.buttons}>

        <button className={classes.modes} onClick={modeClickHandler}>
          <div >
            <img src={beam}></img>
            <p>{isDarkMode?'Light Mode':'Dark Mode'}</p>
          </div>
        </button>       
        
        <button className={isDarkMode?` ${classes.settings_dark}`:classes.settings}>
          <img src={addIcon}/>
        </button>
        
        <button className={isDarkMode?`${classes.settings_dark}`:classes.settings}>
          <img src={settings_icon}/>
        
        </button>
     </div>
     
    </div>
    
  );

  
}
Navbar.propTypes={
  isDarkMode:PropTypes.bool,
  DarkModeHandler:PropTypes.func
}
export default Navbar;
