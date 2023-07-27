import React, { useState,useEffect} from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import i from './assets/login.jpg';
import vi from './assets/loginvideo.mp4';
import {useDispatch, useSelector} from 'react-redux';
import { login } from './features/user';
function Login(){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailerr,setEmailerr]=useState('');
  const[passerr,setPasserr]=useState('');
  const [errors, setErrors] = useState();

  const user=useSelector(state => state.user.value)
  const [content, addContent]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
    addContent(response.data);
  });
},[])
const handleNext=()=>{
  dispatch(login({email}));navigate("/")
}
const handleChange = async(e) => {
  e.preventDefault();
  if(email.length===0){
    setEmailerr("EmailId  is required");    
    return;
  }
  else{
    setEmailerr("");    
  }
  if(password.length===0){
    setPasserr("Password is required");    
    return;
  }
  else{
    setPasserr("");    
  }
  if(email.length!==0 && password.length!==0){
try{
const response = await axios.post(
  'http://localhost:8181/api/v1/auth/authenticate',
  {
    email,
    password
  });
  handleNext();
  let token = response.data.token;
  let user = response.data.userResponse;
  localStorage.setItem('token',token);
  localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
  console.log("helloooo");
  if (error.response && error.response.status === 403) {
    setErrors("Invalid email or password" );
  } else {
    console.error('Error:', error);
  }
}
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
      <div className="container" >
      <form>
        <center>
         < img id="i1" src={i} style={{width:"15vh",height:"15vh"}}></img>
         </center>
      <h1 style={{color:"black"}}>Login</h1>
        <input type="text" placeholder="Email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <span style={{color:"red"}}>{emailerr}</span>
        <span style={{color:"red"}}>{errors}</span>
        <input type="password" placeholder="Password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <span style={{color:"red"}}>{passerr}</span>
        <br></br>
        <Link to='/'><button  id="lb1" type="submit" onClick={handleChange}>Login</button></Link>
        
        <br></br><br></br>
        Are you a admin?
        <Link to='/admin'>Login here</Link>
        <br></br><br></br>
        <button id='lb2'><Link to='/register'><span style={{color:"white"}}>SignUp</span></Link></button>
        <br></br><br></br>
      </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;