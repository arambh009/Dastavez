import React , {useEffect,useState}from "react";
import Navbar from '../Navbar/Navbar';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import classes from './Dashboard.module.css'
import UnlockModal from "../../UI/UnlockModal";
import CreateFolderModal from "../../UI/CreateFolderModal";
import CreateFileModal from "../../UI/CreateFileModal";

const initData=[{key:"0",label:"My Files",type:"folder",parent:""}];
const initCrumbsAndKey={crumbs:'My Files /',key:'0'};

const Dashboard=()=>{

    //will contain latest info about breadcrumbs and key of the component clicked which will help in folder/file creation
    const [crumbsAndKey,setCrumbsAndKey]=useState(initCrumbsAndKey);
    
    // to set darkmode 
    const [darkMode,setDarkMode]=useState(false);
    
    // to show enter pin/lockscreen darkmode
    const [lock,setLock]=useState(false);
    
    //to show 'Create Folder Modal'
    const [showCreateFolder,setShowCreateFolder]=useState(false);

    //to show 'Create File Modal'
    const [showCreateFile,setShowCreateFile]=useState(false);
    
    //to display contents of currently clicked folder below navbar
    const [displayContents,setDisplayContents]=useState([]);
  
    
    useEffect(()=>{
        // to initialize by graph like left UI (display of files)
       localStorage.setItem('-1',JSON.stringify(initData));
    },[])

    const lockHandler=()=>{
        setLock(true);
    }
    
    
    const crumbsAndKeyHandler=(crumbsAndKey)=>{
        setCrumbsAndKey(crumbsAndKey);//sets latest values of crumbs and key
    }
    const darkModeHandler=()=>{//changes mode 
            setDarkMode(x=>!x);
    }
    
    const createFileFolderHandler=(data)=>{
        if(data.type==='folder'){
            let list=[];
            if(localStorage.getItem(crumbsAndKey.key)!==null){
                list=JSON.parse(localStorage.getItem(crumbsAndKey.key));
            }
            
            let idx=(list)?list.length:0;
            const obj={key:crumbsAndKey.key+"-"+String(idx), label:data.folderName,type:"folder", parent:crumbsAndKey.key};
            
            const arr=[...list,obj];
            setDisplayContents(arr);//to update content to display below navbar
    
            console.log(arr);
            
            localStorage.setItem(crumbsAndKey.key,JSON.stringify(arr));//updating local storage
             setShowCreateFolder(false); //closing 'create folder modal'  
        }
        if(data.type==='file'){
            let list=[];
            if(localStorage.getItem(crumbsAndKey.key)!==null){
                list=JSON.parse(localStorage.getItem(crumbsAndKey.key));
            }
            
            let idx=(list)?list.length:0;
            const obj={key:crumbsAndKey.key+"-"+String(idx), label:data.fileName,type:"file",content:data.fileContent, parent:crumbsAndKey.key};
            
            const arr=[...list,obj];
            setDisplayContents(arr);//to update content to display below navbar
    
            console.log(arr);
            //localStorage.setItem(crumbsAndKey.key+"-"+String(idx),JSON.stringify(data.fileContent))
            localStorage.setItem(crumbsAndKey.key,JSON.stringify(arr));//updating local storage
             setShowCreateFile(false); //closing 'create folder modal'  
        }
    }
    
     useEffect(()=>{ 
        
     },[displayContents])

     
    return(
        <div className={darkMode?`${classes.div1} ${classes.dark}`:classes.div1}>

            <LeftSideBar enterCrumbsAndKey={crumbsAndKeyHandler} showCreateFolder={setShowCreateFolder} showCreateFile={setShowCreateFile} 
                 lockIt={lockHandler} isDarkMode={darkMode} treeData={initData}/>
            
            <Navbar crumbs={crumbsAndKey.crumbs} showCreateFolder={setShowCreateFolder} showCreateFile={setShowCreateFile} key_={crumbsAndKey.key} displayContents={displayContents}
                DarkModeHandler={darkModeHandler} isDarkMode={darkMode} />
            
            {showCreateFolder && <CreateFolderModal showCreateFolder={setShowCreateFolder} createFileFolderHandler={createFileFolderHandler}/>}

            {showCreateFile && <CreateFileModal showCreateFile={setShowCreateFile} createFileFolderHandler={createFileFolderHandler}/>}

            {lock && <UnlockModal isDarkMode={darkMode}/>}
        </div>

        
    );
}
export default Dashboard;