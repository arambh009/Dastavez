import React , {useState}from "react";
import Navbar from '../Navbar/Navbar';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import classes from './Dashboard.module.css'
import UnlockModal from "../../UI/UnlockModal";

const Dashboard=()=>{
    const [crumbs,setCrumbs]=useState('');

    const [darkMode,setDarkMode]=useState(false);
    const [lock,setLock]=useState(false);
    const lockHandler=()=>{
        setLock(true);
    }
    console.log(lock);
    
    const crumbsHandler=(e)=>{
        setCrumbs(e);
    }
    const darkModeHandler=()=>{
            console.log('clicked');
            setDarkMode(x=>!x);
        }
    
    

    return(
        <div className={darkMode?`${classes.div1} ${classes.dark}`:classes.div1}>
            <LeftSideBar enterCrumbs={crumbsHandler} crumbs={crumbs}lockIt={lockHandler} isDarkMode={darkMode}/>
            <Navbar crumbs={crumbs} DarkModeHandler={darkModeHandler} isDarkMode={darkMode} />
            {lock && <UnlockModal isDarkMode={darkMode}/>}
        </div>
        
    );
}
export default Dashboard;