import React,{useState} from 'react';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';

const UnlockModal=({AccountPin,setLock})=>{
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const[error,setError]=useState(false);
    //console.log(error)
   
    const toggleHandler=(element,index)=>{
      //  console.log(element.value,index);
        if(element.value!='' && element.nextSibling && index!=4){
            element.nextSibling.focus();

          }else if(element.value===''&& element.previousSibling){
            //console.log(element.value,index);
            element.previousSibling.focus(); 
          }
        //   else{
        //       //console.log(element.value,index);
        //       //console.log(otp);
        //      if(index!=0) document.getElementById(`${index}`).previousSibling.focus();
        //     //otp[index-1]?.current?.focus();
        //   }
          return;
    }
    const onClickUnlockHandler=()=>{
        //alert(otp.join(""));
        // console.log(otp);
        const enteredPin=otp.join("")
        //  console.log(AccountPin,enteredPin);
        if(enteredPin==AccountPin){
            setLock(false);
            console.log('matched');
        }
        else{
            setError(true);
        }
    }
    //document.q
    // const handleBackspace = (element,idx) => {
    //     console.log('fc1');
        
    //     if(element.value===''&& element.previousSibling){
    //         //console.log(element.value,index);
    //         console.log(idx,"jijipo");
    //         element.previousSibling.focus(); 
    //       }
    //     if (otp[idx] === "" && idx!=0) {
    //      // focusInput(idx - 1);
    //      console.log('fc2');
    //       otp[idx-1]?.current?.focus();
    //     // } else {
    //     //   pass[idx] = "";
    //     // }
    //   }
    // }
    const handleChange = (element, index) => {
        // console.log(element,index);
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
                                id={String(index)}
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                 //onKeyPress={(e)=>onKeyPressHandler(e,index)}
                                 onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      onClickUnlockHandler();
                                    } else if (e.key === "Backspace") {
                                        console.log('bsc');
                                        toggleHandler(e,index);
                                     // handleBackspace(e,index);
                                    }
                                  }}
                            />
                        );
                    })}
                    </div>
                    {/* <p>OTP Entered - {otp.join("")}</p> */}
                    {error && <p className={classes.error_message}>*Incorrect Pin</p>}
                    <div className={classes.buttons}>
                        <button onClick={()=> setOtp([...otp.map(()=> "")])}>
                            Clear
                        </button>
                        <button className={classes.unlock} onClick={onClickUnlockHandler}>
                            Unlock
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
UnlockModal.propTypes={
    AccountPin:PropTypes.string,
    setLock:PropTypes.func
}
export default UnlockModal;