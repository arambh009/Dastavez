import React,{useState} from 'react';
import classes from './Modal.module.css'
const Modal=()=>{
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        console.log(element.value,index);
        //console.log(index);
        if(isNaN(element.value)){
            console.log('ccc');
            return;
        }
        console.log(otp[index]);
        
        if(element.value.length===0){
            
            if (element.previousSibling) {
                element.previousSibling.focus();
            }
        }
        // if (element.value.length===0){
        //     setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        //     if (element.previousSibling) {
        //         element.previousSibling.focus();
        //     }
            
        //     return;
        // }

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if(element.value===''){
              
            if (element.previousSibling) {
                element.previousSibling.focus();
            }
        }
        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
        
    };
    const onFocusHandler=(e)=>{
        console.log(e.target.value,'focused');
      
    }
   // console.log(otp);
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <div className={classes.contents}>
                    <h2 className={classes.heading}>Enter Account Pin</h2>
                    <div className={classes.inputs}>
                    {otp.map((data, index) => {//generates input boxes
                        return (
                            <input 
                                className={classes.pin_feild}
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={onFocusHandler}
                            />
                        );
                    })}
                    </div>
                    {/* <p>OTP Entered - {otp.join("")}</p> */}
                    <div className={classes.buttons}>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={()=> setOtp([...otp.map(()=> "")])}
                        >
                            Clear
                        </button>
                        <button
                            className={classes.unlock}
                            onClick={()=>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;