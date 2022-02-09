import React from 'react';
import DastavezLogo from '../Logo/DastavezLogo';
import classes from './LeftSideBar.module.scss';
import addFile from "../../images/addFile.svg";
import addFolder from "../../images/addFolder.svg";
import lock from "../../images/lock.svg";
import TreeComponent from './TreeComponent';
import PropTypes from 'prop-types';

const LeftSideBar=({lockIt})=>{
  const lockButtonHandler=(e)=>{
    e.preventDefault();
    // alert('lock button clicked');
    lockIt();
  }
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
        <div className={classes.tree}>
          <TreeComponent/>
        </div>
        
        <button className={classes.lock_button} onClick={lockButtonHandler} >
            <div >
              <img src={lock}/>
              <p>Lock Now</p>
            </div>
        </button> 

      </div>
        
    );
}
LeftSideBar.propTypes={
  lockIt:PropTypes.func,
}
export default LeftSideBar;