import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HelperTree from './HelperTree';
import openFolder from '../../images/smallOpenFolder.svg';
import closedFolder from '../../images/smallClosedFolder.svg';
import classes from './TreeNode.module.css';

const TreeNode=({node})=>{
    const[childVis,setChildVis]=useState(false);
  
    const hasChild=node.children?true:false;
    const onClickHandler=()=>{
      setChildVis(x=>!x)
    }
    
    return(
      <li >
        <div onClick={onClickHandler}>
          {hasChild && (
            <div></div>
          )}
          <div className={classes.folder}>
              <img src={childVis?openFolder:closedFolder}/>
              {node.label}
          </div>
        </div>
  
        {
          hasChild && childVis && <div>
            <ul>
                <HelperTree data={node.children}/>
            </ul>
          </div>
        } 
      </li>
    )
  }
  TreeNode.propTypes={
    node:PropTypes.object,

  }
  
  export default TreeNode;