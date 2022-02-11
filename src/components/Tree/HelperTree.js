import React from "react";
import TreeNode from './TreeNode'; 
import PropTypes from 'prop-types';
import classes from './HelperTree.module.css'
const HelperTree=({data=[],isDarkMode})=>{//tree
    return(
        <div>
          <ul className={classes.div1}>{
            (data.map((tree) => (
              <TreeNode key={tree.key} isDarkMode={isDarkMode} node={tree}/>
            )))
            }
          </ul>
        
      </div>
    )
}

HelperTree.propTypes={
  data:PropTypes.array,
  isDarkMode:PropTypes.bool
}

export default HelperTree;