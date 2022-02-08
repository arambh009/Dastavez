import React, { useState } from "react";
import classes from './HomepageForms.module.css';

const HomepageForms=()=>{
    const [pin,setPin]=useState('');
    const [confirmedPin,setConfirmedPin]=useState('');
    const [hasError,setHasError]=useState(false);

    const pinChangeHandler=(e)=>{
        setPin(e.target.value);
    }
    const confirmedPinChangeHandler=(e)=>{
        setConfirmedPin(e.target.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
       // console.log("jghv");
        if(pin.length!=4 || confirmedPin.length!=4){
            setHasError(true);
            return;
        }
        if(pin===confirmedPin){
            alert('pin confirmed');
            setHasError(false);
        }
        
        return;
    }
   
    return(
        <form className={classes.forms} onSubmit={onSubmitHandler}>
            <h3>Set your 4-digit account pin</h3>
            <input type="number" onChange={pinChangeHandler} value={pin} placeholder='Enter new Pin'/>
            <input type="number" onChange={confirmedPinChangeHandler} value={confirmedPin} placeholder='Confirm new Pin'/>
            {hasError && <p className={classes.error_text}>invalid input</p>}
          
            <button onClick={onSubmitHandler}>Submit</button>
        </form>
    );
}
export default HomepageForms;