import React from 'react';
import axios from 'axios';
import { useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Deleteform() {
    const [id, setId] = useState();
    const [error, setError] = useState('');
    function del() {
        axios.delete('http://localhost:8080/appointment/del?id=' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("Successfully deleted");
   }
    return (
        <>  <center>
            <br></br><br></br>
            <h1 style={{color:'black'}}>APPOINTMENT CANCELLATION</h1>
            <div style={{width:"300px",height:"200px",backgroundColor:" rgba(150, 212, 212, 0.4)",paddingTop:"80px",marginTop:"50px"}}>
            <TextField required value={id} label="Id" type="number" placeholder="Enter Id to be deleted" InputLabelProps={{shrink: true}} style={{width:"200px"}} onChange={(event)=>setId(event.target.value)} /><br></br><br></br>

            <Button variant="contained" onClick={del}>DELETE</Button>
            </div>
          
            <h3 style={{color:"red"}}>
                {error}
            </h3>
                </center>
          
        </>
    );
}

export default Deleteform;