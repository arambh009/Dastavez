import React,{useState} from 'react';
import classes from './Modal.module.css'
const UnlockModal=()=>{
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const toggleHandler=(element,index)=>{
        if(element.value!= '' && element.nextSibling && index!=4){
            element.nextSibling.focus();
          }else if(otp[index] != '' && element.previousSibling){
            element.previousSibling.focus(); 
          }
          return;
    }

    const handleChange = (element, index) => {
      
        if(isNaN(element.value)){
            return;
        }
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        toggleHandler(element,index);
    };
   
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
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                    </div>
                    {/* <p>OTP Entered - {otp.join("")}</p> */}
                    <div className={classes.buttons}>
                        <button

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
export default UnlockModal;