import * as React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';
import i from './doc.jpg'
import './register.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function UpdateForm() {
    const [id, setId] = useState('');
    const[name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[age,setAge]=useState();
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[city,setCity]=useState("");
    const[problem,setProblem]=useState("");
    async function save(event) {
        event.preventDefault();
        try {
                await axios.put("http://localhost:8080/appointment/put",
                
                { id:id,
                  name:name,
                  gender:gender,
                  age:Number(age),
                  date:date,
                  time:time,
                  place:city,
                  problem:problem  
                });
            alert("Appointment Updated Successfully");
            setId("");
            setName("");
            setGender("");
            setAge("");
            setDate("");
            setTime("");
            setCity("");
            setProblem("");
            }
        catch (err) {
        }
    }

    return (
        <>
        <div id="d1">
          <br></br><br></br>
          <img src={i} style={{width:"800px"}}></img>
        </div>
        <div id="d2">
        <h1>APPOINTMENT UPDATION</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField required value={id} label="Id" type="number" placeholder='Enter the id' variant="outlined" InputLabelProps={{shrink: true}} style={{width:"308px"}} onChange={(event)=>setId(event.target.value)}/><br></br><br></br>
        <TextField required value={name} label="Name" placeholder='Enter your name' variant="outlined" InputLabelProps={{shrink: true}} style={{width:"308px"}} onChange={(event)=>setName(event.target.value)}/><br></br><br></br>
        <TextField required value={gender} label="Gender" placeholder='Male/Female/Others' InputLabelProps={{shrink: true}} onChange={(event)=>setGender(event.target.value)}/>
        <TextField required value={age} label="Age" type="number"  InputLabelProps={{shrink: true}} style={{width:"90px"}} onChange={(event)=>setAge(event.target.value)} /><br></br><br></br>
        <TextField required value={date} label="Appointment Date" placeholder='dd-mm-yyyy' InputLabelProps={{shrink: true}} style={{width:"250px"}} onChange={(event)=>setDate(event.target.value)}/><br></br><br></br>
        <TextField required value={time} label="Appointment Time" placeholder='hh:mm AM/PM' InputLabelProps={{shrink: true}} style={{width:"250px"}} onChange={(event)=>setTime(event.target.value)}/><br></br><br></br>
        <TextField required value={city} label="City" placeholder='Enter your city' InputLabelProps={{shrink: true}}style={{width:"250px"}} onChange={(event)=>setCity(event.target.value)}/><br></br><br></br>
        <TextField requiredvalue={problem} label="Consulting Reason" multiline rows={3}  placeholder='Symptoms if any' style={{width:"308px"}}onChange={(event)=>setProblem(event.target.value)}/>
        <center>
        <Button variant="contained" onClick={save}>SUBMIT</Button>
        </center>
    </Box>
        </div>
        </>
    );
}