import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function Input(props) {
    return (
        <div>
            <form >
             
                        <TextField id="outlined-basic" label="NAME" variant="outlined" />
                       <TextField id="outlined-basic" label="TRIPS" variant="outlined" />
                       <TextField id="outlined-basic" label="ID" variant="outlined" />
                       <TextField id="outlined-basic" label="COUNTRY" variant="outlined" />
                       <TextField id="outlined-basic" label="ESTABLISHED" variant="outlined" />
                       <TextField id="outlined-basic" label="HEADQUATER" variant="outlined" />

                       <Button  variant="contained" color="primary" onClick={ () => {props.setShowData(false)}}>Update</Button>

            </form>
        </div>
    )
}

export default Input;
