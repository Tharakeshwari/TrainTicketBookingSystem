import React from 'react'
import './login.css'
import i from './page1.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Login() {
    return ( 
        <>
        <div id="d1">
            <img src={i} style={{width:""}}></img>
        </div>
        <div id="d2">
            <h1>WE CARE</h1>
            <h2>Login here</h2>
            <TextField required id="filled-required"label="MailId" placeholder="Enter your mailid"variant="filled" style={{width:"250px"}} /><br></br><br></br>
            <TextField required id="filled-required"label="Password" placeholder="Enter a password"variant="filled" style={{width:"250px"}}/><br></br><br></br>
            <Button className='button'variant='contained'>Submit</Button>
        </div>
        </>
     );
}

export default Login;