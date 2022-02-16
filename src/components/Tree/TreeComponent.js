import React from "react";
import HelperTree from'./HelperTree'
import classes from './TreeComponent.module.css'
import PropTypes from 'prop-types';

const TreeComponent=({isDarkMode,enterCrumbsAndKey,treeData=[]})=>{//tree list
  //console.log(treeData,typeof(treeData))
  let crumbString="";
    return(
      <div className="row">
        <div className="col text-center">
          
            <div className={isDarkMode?`${classes.dark} ${classes.class}`:classes.class}>
              <div className={classes.enclosure}>
                <HelperTree crumbString={crumbString}  enterCrumbsAndKey={enterCrumbsAndKey} isDarkMode={isDarkMode} data={treeData}/>
              </div>
            </div>
        
        </div>
      </div>
    );
}
TreeComponent.propTypes={
  treeData:PropTypes.array,
  isDarkMode:PropTypes.bool,
  enterCrumbsAndKey:PropTypes.func
}
export default TreeComponent;