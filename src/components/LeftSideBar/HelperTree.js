import React from "react";
import TreeNode from './TreeNode'; 
import PropTypes from 'prop-types';
import classes from './HelperTree.module.css'
const HelperTree=({data=[]})=>{//tree
    return(
        <div>
          <ul className={classes.div1}>{
            (data.map((tree) => (
              <TreeNode key={tree.key}  node={tree}/>
            )))
            }
          </ul>
        
      </div>
    )
}

HelperTree.propTypes={
  data:PropTypes.array,
}

export default HelperTree;