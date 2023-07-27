import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './register.css'
import i from './doc.jpg'
function Register() {
  const[name,setName]=useState("");
  const[gender,setGender]=useState("");
  const[age,setAge]=useState();
  const[date,setDate]=useState("");
  const[time,setTime]=useState("");
  const[city,setCity]=useState("");
  const[problem,setProblem]=useState("");
  
  const[loading,setLoading]=useState(false);
  const[open,setOpen]=useState(false)
   function handleClose(){
    setOpen(false);
  }
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const data={
        name:name,
        gender:gender,
        age:Number(age),
        date:date,
        time:time,
        place:city,
        problem:problem
      };
      const res=await axios.post("http://localhost:8080/appointment",data);
      await console.log(res);
      await setOpen(true);
    }catch(e){
      console.log(e.message);
    }
    setLoading(false);
    alert("Submission is done!!")
    }
    return (
        <>
        <div id="d1">
          <br></br><br></br>
          00
        </div>
        <div id="d2">
        <h1>Book your appointment now</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField required value={name} label="Name" placeholder='Enter your name' variant="outlined" InputLabelProps={{shrink: true}} style={{width:"308px"}} onChange={(event)=>setName(event.target.value)}/><br></br><br></br>
        <TextField required value={gender} label="Gender" placeholder='Male/Female/Others' InputLabelProps={{shrink: true}} onChange={(event)=>setGender(event.target.value)}/>
        <TextField required value={age} label="Age" type="number"  InputLabelProps={{shrink: true}} style={{width:"90px"}} onChange={(event)=>setAge(event.target.value)} /><br></br><br></br>
        <TextField required value={date} label="Appointment Date" placeholder='dd-mm-yyyy' InputLabelProps={{shrink: true}} style={{width:"250px"}} onChange={(event)=>setDate(event.target.value)}/><br></br><br></br>
        <TextField required value={time} label="Appointment Time" placeholder='hh:mm AM/PM' InputLabelProps={{shrink: true}} style={{width:"250px"}} onChange={(event)=>setTime(event.target.value)}/><br></br><br></br>
        <TextField required value={city} label="City" placeholder='Enter your city' InputLabelProps={{shrink: true}}style={{width:"250px"}} onChange={(event)=>setCity(event.target.value)}/><br></br><br></br>
        <TextField requiredvalue={problem} label="Consulting Reason" multiline rows={3}  placeholder='Symptoms if any' style={{width:"308px"}}onChange={(event)=>setProblem(event.target.value)}/>
        <center>
        <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
        </center>
    </Box>
        </div>
        </>
    );
}

export default Register;