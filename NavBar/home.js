import React, { Component } from 'react';
import './home.css';
import i from './assets/loginlogo.jpg';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './about';
import ImageSlider from './ImageSlider';
class Home extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return ( 
        <>
        <div>
        <nav>
              <a href='index.html'>
              <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
              </a>
            <div >

                <ul  id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                    <li><a className='active' href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Support</a></li>
                    <li><a href="index.html">Contact</a></li>
                    <li><button id='hlogin'><Link to='/login'>Login/SignUp</Link></button></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        </div>
        {/* <br></br><br></br><br></br><br></br><br></br>
        <div id="imgslider">
        <ImageSlider/>
        </div> */}
        </>
     );
    }
}

export default Home;