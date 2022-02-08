import React from 'react';
import classes from "./Navbar.module.css";
import search_icon from "../../images/search.png";
import settings_icon from "../../images/settings_icon.svg"
import addIcon from "../../images/add.svg"
import beam from "../../images/beam.svg"
const Navbar=()=> {
  
  return (
    <div className={classes.nav}>
      
      <div className={classes.bar}>
        <img src={search_icon}/>
        <input className={classes.searchbar} type="text" title="Search"/>
     </div>
     
     <div className={classes.buttons}>

        <button className={classes.modes}>
          <div >
            <img src={beam}></img>
            <p>Light Mode</p>
          </div>
        </button>       
        
        <button className={classes.settings}>
          <img src={addIcon}/>
        </button>
        
        <button className={classes.settings}>
          <img src={settings_icon}/>
        
        </button>
     </div>
     
    </div>
    
  );

  
}
export default Navbar;
