import React, { Component } from 'react';
import './home.css';
import i from './assets/logo.jpg';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './about';
import ImageSlider from './ImageSlider';
import Footer from './footer';
import SearchBar from './searchbar';
function Home() {
    return ( 
        <>
        <div id="home">
        <nav>
              <a href="#">
                <img src={i} style={{width:"12%",height:"12%",borderRadius:"50%"}}></img>
              </a>
            <div >

                <ul  id="navbar">
                    <li><a className='active' href="#home">Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="index.html">Support</a></li>
                    <li><a href="#hfooter">Contact</a></li>
                    <li><button id='hlogin'><Link to='/login'>Login/SignUp</Link></button></li>
                </ul>
            </div>
        </nav>
        </div>
        <div id="searching">
        <SearchBar/>
        </div>
        <div id="aboutus">
        <About/>
        </div>
        <div id="hfooter">
        <Footer/>
        </div>
        </>
     );
}

export default Home;