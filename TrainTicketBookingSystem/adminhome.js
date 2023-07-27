import React, { Component } from 'react';
import './home.css';
import i from './assets/logo.jpg';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './about';
import ImageSlider from './ImageSlider';
import Footer from './footer';
import SearchBar from './searchbar';
// import {useSelector} from 'react-redux';
// import UserLogout from "./logout";
function AdminHome() {
    // const user=useSelector(state => state.user.value)
    return ( 
        <>
        <div id="home">
        <nav>
              <a href="#">
                <img src={i} style={{width:"12%",height:"12%",borderRadius:"50px"}}></img>
              </a>
            <div >

                <ul  id="navbar">
                    <li><a className='active' href="#adminhome">Home</a></li>
                    <li><Link to='/addtrain'>Add Train</Link></li>
                    <li><Link to='/managetrain'>Trains</Link></li>
                </ul>
            </div>
        </nav>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <div id="searching">
        <ImageSlider/>
        </div>
        <div id="searching">
        <SearchBar/>
        </div>        
        </>
     );
}

export default AdminHome;