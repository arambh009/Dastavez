import React from 'react';
import DastavezLogo from '../Logo/DastavezLogo';
import classes from './LeftSideBar.module.scss';
import addFile from "../../images/addFile.svg";
import addFolder from "../../images/addFolder.svg";
import lock from "../../images/lock.svg";

const LeftSideBar=()=>{
    return(
      <div className={classes.div1}>
        
        <DastavezLogo/>
        
        <div className={classes.button}>
  
          <button className={classes.add}>
            <div >
              <img src={addFile}/>
              <p>Add File</p>
            </div>
          </button> 

          <button className={classes.add}>
            <div >
              <img src={addFolder}/>
              <p>Add Folder</p>
            </div>
          </button> 

        </div>
        
        <button className={classes.lock_button}>
            <div >
              <img src={lock}/>
              <p>Lock Now</p>
            </div>
        </button> 

      </div>
        
    );
}
export default LeftSideBar;