import React from "react";
import HelperTree from'./HelperTree'
import classes from './TreeComponent.module.css'
import PropTypes from 'prop-types';
const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Document-0-3.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Document-0-4.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
];
const TreeComponent=({isDarkMode,enterCrumbs})=>{//tree list
  let crumbString="";
    return(
      <div className="row">
        <div className="col text-center">
          
            <div className={isDarkMode?`${classes.dark} ${classes.class}`:classes.class}>
              <div className={classes.enclosure}>
                <HelperTree crumbString={crumbString}  enterCrumbs={enterCrumbs} isDarkMode={isDarkMode} data={treeData}/>
              </div>
            </div>
        
        </div>
      </div>
    );
}
TreeComponent.propTypes={
 
  isDarkMode:PropTypes.bool,
  enterCrumbs:PropTypes.func
}
export default TreeComponent;