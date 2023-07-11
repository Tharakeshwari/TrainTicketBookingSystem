import React from 'react';
import './admin.css';
import i from './assets/login.jpg';
import { Link } from 'react-router-dom';

function Admin(){
  return (
    <>
    <div className="top2">
      <div className="container" >
      <form>
      <center>
         < img id="i1" src={i} style={{width:"15vh",height:"15vh"}}></img>
         </center>
      <h1>Admin Login</h1>
        <input type="text" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit" id='ab1'>Login</button>
        <br></br><br></br>
        Are you a user?
        <Link to='/login'>Login here</Link>
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Admin;