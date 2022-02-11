import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HelperTree from './HelperTree';
import openFolder from '../../images/smallOpenFolder.svg';
import closedFolder from '../../images/smallClosedFolder.svg';
import classes from './TreeNode.module.css';

const TreeNode=({node,isDarkMode})=>{
    const[childVis,setChildVis]=useState(false);
  
    const hasChild=node.children?true:false;
    const onClickHandler=()=>{
      setChildVis(x=>!x)
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
                <HelperTree data={node.children} isDarkMode={isDarkMode}/>
            </ul>
          </div>
        } 
      </li>
    )
  }
  TreeNode.propTypes={
    node:PropTypes.object,
    isDarkMode:PropTypes.bool
  }
  
  export default TreeNode;