import React, { Component } from 'react';
import './home.css';
import i from './assets/logo.jpg';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './about';
import ImageSlider from './ImageSlider';
import Footer from './footer';
import SearchBar from './searchbar';
import {useSelector} from 'react-redux';
import UserLogout from "./logout";
function Home() {
    const user=useSelector(state => state.user.value);
    return ( 
        <>
        <div id="home">
        <nav>
              <a href="#">
                <img src={i} style={{width:"12%",height:"12%",borderRadius:"50px"}}></img>
              </a>
            <div >

                <ul  id="navbar">
                    <li><a className='active' href="#home">Home</a></li>
                    <li><a href="#aboutus">About</a></li>
                    <li><Link to='/support'>Support</Link></li>
                    <li><a href="#hfooter">Contact</a></li>
                    <li><Link to='/feedback'>Feedback</Link></li>
                    <li>{!user.email?<Link to='/login'>Login/SignUp</Link>:
                    <h4>{user.email}<UserLogout/></h4>}</li>
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