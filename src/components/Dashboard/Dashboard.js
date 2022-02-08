import React  from "react";
import Navbar from '../Navbar/Navbar';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import classes from './Dashboard.module.css'
const Dashboard=()=>{
    return(
        <div className={classes.div1}>
            <LeftSideBar/>
            <Navbar/>
        </div>
        
    );
}
export default Dashboard;