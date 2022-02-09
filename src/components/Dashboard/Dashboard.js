import React , {useState}from "react";
import Navbar from '../Navbar/Navbar';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import classes from './Dashboard.module.css'
import UnlockModal from "../../UI/UnlockModal";

const Dashboard=()=>{
    const [lock,setLock]=useState(false);
    const lockHandler=()=>{
        setLock(true);
    }
    console.log(lock);
    
    return(
        <div className={classes.div1}>
            <LeftSideBar lockIt={lockHandler} />
            <Navbar/>
            {lock && <UnlockModal/>}
        </div>
        
    );
}
export default Dashboard;