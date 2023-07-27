import React, { useEffect, useState } from 'react';
import './login.css';
import { Link} from 'react-router-dom';
import i from './assets/login.jpg';
import vi from './assets/loginvideo.mp4';
import axios from 'axios';
function Admin(){
  const[content,addContent]=useState([]);
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailerr,setEmailerr]=useState('');
  const[passerr,setPasserr]=useState('');
  const[disable,setDisable]=useState(true); 
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if(email.length===0){
      setEmailerr("Email required");
      return;
    }
    else{
      setEmailerr("");
    }
    if(password.length===0){
      setPasserr("Password required");
      return;
    }
    else{
      setPasserr("");
    }
    if(email.length!==0 && password.length!==0){
        const response = axios.get("http://localhost:8181/admin/");
        addContent(response.data);
      content.map((mp)=>{
        if(mp.email===email){
          if(mp.password===password){
            console.log("hello");
            // setDisable=false;
          }
          else{
            setPasserr("Invalid password");
          }
        }        
        else{
          setEmailerr("EmailId doesn't exist");
        }
      })
  }
  };
  return (
    <>
    <div className="top1">
      <div id="logDiv1">
      <div className="loginvideo" style={{float:"right"}}>
      <video className='videoTag' autoPlay loop muted> 
    <source src={vi} type='video/mp4' />
</video>
      </div>
      </div>
      <div id="logDiv2">
      <div className="container" style={{paddingTop:"50px"}}>
      <form>
        <center>
         < img id="i1" src={i} style={{width:"15vh",height:"15vh"}}></img>
         </center>
      <h1 style={{color:"black"}}>Admin</h1>
        <input type="text" placeholder="Email" name="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <span style={{color:"red"}}>{emailerr}</span>
        <input type="password" placeholder="Password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <span style={{color:"red"}}>{passerr}</span>
        
        <Link to='/adminhome'><button  id="lb1" type="submit">Login</button></Link>
        
        <br></br><br></br>
        Are you a user?
        <Link to='/login'>Login here</Link>
      </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Admin;