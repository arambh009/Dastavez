import classes from './Modal.module.css'
import React from 'react';

const CreateFolderModal=()=>{
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <div className={classes.contents}>
                    <h2 className={classes.heading}>Create Folder</h2>
                    <div className={classes.folder_name}>
                        <input type='text' placeholder='Enter Folder Name'/>
                    </div>
                    
                    <div className={classes.buttons}>
                        <button className={classes.unlock} onClick={()=> alert("Entered OTP is ")}>
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateFolderModal;
