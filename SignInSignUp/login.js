import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import i from './assets/login.jpg';
function Login(){
  return (
    <>
    <div className="top1">
      <div className="container" >
      <form>
        <center>
         < img id="i1" src={i} style={{width:"15vh",height:"15vh"}}></img>
         </center>
      <h1 style={{color:"rgb(248, 164, 7)"}}>Login</h1>
        <input type="text" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <button id='lb1' type="submit">
        <Link to='/'>Login</Link>
        </button>
        <br></br><br></br>
        Are you a admin?
        <Link to='/admin'>Login here</Link>
        <br></br><br></br>
        <button id='lb2'><Link to='/register'><span style={{color:"white"}}>SignUp</span></Link></button>
        <br></br><br></br>
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Login;