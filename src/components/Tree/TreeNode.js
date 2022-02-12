import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HelperTree from './HelperTree';
import openFolder from '../../images/smallOpenFolder.svg';
import closedFolder from '../../images/smallClosedFolder.svg';
import classes from './TreeNode.module.css';

const TreeNode=({node,isDarkMode,crumbString,enterCrumbs})=>{
    const[childVis,setChildVis]=useState(false);
    
    const hasChild=node.children?true:false;
    crumbString+=node.label+" / ";
    //console.log(crumbString);
    const onClickHandler=()=>{
      setChildVis(x=>!x);
      enterCrumbs(crumbString);
    }
    
    return(
      <li  >
        <div onClick={onClickHandler}>
          {hasChild && (
            <div></div>
          )}
          <div className={isDarkMode?classes.folder_dark:classes.folder}>
              <img src={childVis?openFolder:closedFolder}/>
              {node.label}
          </div>
        </div>
  
        {
          hasChild && childVis && <div>
            <ul >
                <HelperTree enterCrumbs={enterCrumbs} crumbString={crumbString} data={node.children} isDarkMode={isDarkMode}/>
            </ul>
          </div>
        } 
      </li>
    )
  }
  TreeNode.propTypes={
    node:PropTypes.object,
    isDarkMode:PropTypes.bool,
    crumbString:PropTypes.string,
    enterCrumbs:PropTypes.func
  }
  
  export default TreeNode;