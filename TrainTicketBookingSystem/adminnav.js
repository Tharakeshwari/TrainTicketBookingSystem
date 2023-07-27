import React, { Component } from 'react';
import './home.css';
import i from './assets/logo.jpg';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import UserLogout from "./logout";
function NavAdmin() {
    // const user=useSelector(state => state.user.value)
    return ( 
        <>
        <nav style={{zIndex:"2"}}>
              <a href="#">
                <img src={i} style={{width:"12%",height:"12%",borderRadius:"50px"}}></img>
              </a>
            <div >

                <ul  id="navbar">
                    <li><Link to='/adminhome'>Home</Link></li>
                    <li><Link to='/addtrain'>Add Train</Link></li>
                    <li><Link to='/managetrain'>Trains</Link></li>
                   
                </ul>
            </div>
        </nav>
        </>
     );
}

export default NavAdmin;