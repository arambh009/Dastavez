import React , {useState}from "react";
import Navbar from '../Navbar/Navbar';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import classes from './Dashboard.module.css'
import Modal from "../../UI/Modal";

const Dashboard=()=>{
    const [lock,setLock]=useState(false);
    const lockHandler=()=>{
      //  e.preventDefault();
        
       // alert('lock button clicked');
        setLock(true);
        // console.log(lock);
    }
    console.log(lock);
    return(
        <div className={classes.div1}>
            <LeftSideBar lockIt={lockHandler} />
            <Navbar/>
            {lock && <Modal/>}
        </div>
        
    );
}
export default Dashboard;