import React, { useState } from 'react';
import axios from 'axios';
import './addtrain.css';
import NavAdmin from './adminnav';
function AddTrain() {
  const[trainData,setTrainData]=useState({});
  const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setTrainData({...trainData,[id]:value});
    console.log(trainData);
  }

  const handleAddTrain=()=>{
    axios.post("http://localhost:8181/trains/",trainData)
    window.location.reload();
  }
    return ( 
        <>
        <div id="at">
        <NavAdmin/>
        <div id='at1'>
          <h2 style={{color:'black'}}>Add Train</h2>
            {/* <center> */}
            <div id='at2'>
            <div className='at3'>
            <div class="card space icon-relative">
            <label class="label" style={{color:'#555555',fontSize:'15px'}}>Train Number:</label>
            <input type="number" id="train_no" onChange={handleChange} class="input" style={{height:"2vh",width:"82vh"}} ></input>
          </div>
            <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Train Name:</label>
            <input type="text" id="train_name" onChange={handleChange} class="input" ></input>
          </div>
            <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Source:</label>
            <input type="text" id="source" onChange={handleChange} class="input" ></input>
          </div>
            <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Destination:</label>
            <input type="text" id="destination" onChange={handleChange} class="input" ></input>
          </div>
            <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Arrival Time:</label>
            <input type="time" name="appt-time" step="2" id="atime" onChange={handleChange} class="input"  style={{height:"2vh",width:"82vh"}}></input>
          </div>
            <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Depature Time:</label>
            <input type="time" name="appt-time" step="2" id="dtime" onChange={handleChange} class="input"  style={{height:"2vh",width:"82vh"}}></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Distance:</label>
            <input type="number" id="distance" onChange={handleChange} class="input"  style={{height:"2vh",width:"82vh"}}></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Distance:</label>
            <input type="date" id="date" onChange={handleChange} class="input"  style={{height:"2vh",width:"82vh"}}></input>
          </div>
          <div class="btn"onClick={handleAddTrain}  style={{height:"2vh",width:"82vh"}}>
          Add Train
          </div> 
          </div>
            </div>
            {/* </center> */}
        </div>
        </div>
        </>
     );
}

export default AddTrain;