import React from "react";
import classes from './DastavezLogo.module.css';
import logo from '../../images/d.png';

const DastavezLogo=()=>{
    return(
        <div className={classes.div}>
            <img src={logo} alt="cuvette logo"/>
            <h1 className={classes.name}>astavez</h1>    
        </div>
                    
    )
}
export default DastavezLogo;