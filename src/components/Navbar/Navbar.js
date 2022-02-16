import React,{useState} from 'react';
import classes from "./Navbar.module.css";
import search_icon from "../../images/search.png";
import settings_icon from "../../images/settings_icon.svg"
import addIcon from "../../images/add.svg"
import beam from "../../images/beam.svg"
import PropTypes from 'prop-types';
import folderIcon from  "../../images/folder.svg"
import fileIcon from  "../../images/file.svg"
import imageFileIcon from "../../images/image_file.svg"
//import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const Navbar=({isDarkMode,DarkModeHandler,crumbs,key_,showCreateFolder,showCreateFile })=> {
  const [showAddOptions,setShowAddOptions]=useState(false);
  const modeClickHandler=()=>{
    DarkModeHandler();
  }
  
  let list=[];
  if(localStorage.getItem(key_)!==null){
    list=JSON.parse(localStorage.getItem(key_));
  }
  const showAddOptionsHandler=()=>{
    setShowAddOptions(x=>!x);
  }
  const iconIdentifier=(type)=>{
    if(type==="folder")return folderIcon;
    if(type==="imageFile")return imageFileIcon;
    if(type==="file")return fileIcon;
  }

  const onClickCreateFolderHandler=(e)=>{
    e.preventDefault();
    showCreateFolder(true);
  }
  const onClickCreateFileHandler=(e)=>{
    e.preventDefault();
    showCreateFile(true);
  }

  //console.log(displayContents,showCreateFolder);
  return (
  <div className={classes.cover}>
    <div className={isDarkMode?classes.outer_dark:classes.outer}>

      <div className={isDarkMode?classes.nav_dark:classes.nav}>
        
        <div className={isDarkMode?classes.bar_dark:classes.bar}>
          <img src={search_icon}/>
          <input className={isDarkMode?`${classes.searchbar_dark}`:classes.searchbar} type="text" title="Search" placeholder='Search...'/>
        </div>
      
        <div className={classes.buttons}>
          <button className={classes.modes} onClick={modeClickHandler}>
            <div >
              <img src={beam}></img>
              <p>{isDarkMode?'Light Mode':'Dark Mode'}</p>
            </div>
          </button>       
          
          <button onClick={showAddOptionsHandler} className={isDarkMode?` ${classes.settings_dark}`:classes.settings}>
            <img src={addIcon}/>
          </button>

          {showAddOptions && (
            <div className={classes.backdrop} onClick={showAddOptionsHandler}>
              <div className={isDarkMode?classes.addOptions_dark:classes.addOptions}>
                <button  onClick={onClickCreateFileHandler}>New File</button>
                <button onClick={onClickCreateFolderHandler}>New Folder</button>
              </div>
            </div>
            )
            }

          
          <button className={isDarkMode?`${classes.settings_dark}`:classes.settings}>
            <img src={settings_icon}/>
          </button>

        </div>
      </div>

      <div className={isDarkMode?classes.crumbs_dark:classes.crumbs}>{crumbs}</div>
    
    </div>
    <div className={isDarkMode?classes.contents_dark:classes.contents}>
      {
        (list && list.length>0 && list.map((obj) => (
          <div className={classes.icons} key={obj.key}>
            <img   src={iconIdentifier(obj.type)} />
            <p className={isDarkMode?classes.icon_name_dark:classes.icon_name}>{obj.label}</p>
          </div>
          
        )))
      }
    </div>
  </div>  
);

  
}
Navbar.propTypes={
  isDarkMode:PropTypes.bool,
  DarkModeHandler:PropTypes.func,
  crumbs:PropTypes.string,
  displayContents:PropTypes.array,
  key_:PropTypes.string,
  showCreateFolder:PropTypes.func,
  showCreateFile:PropTypes.func 
}
export default Navbar;
