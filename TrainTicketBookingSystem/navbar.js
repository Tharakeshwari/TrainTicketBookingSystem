import React from 'react'
import i from './assets/logo.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';
import UserLogout from './logout';
import { useSelector } from 'react-redux';
function NavBar() {
    const user=useSelector(state => state.user.value)
    return ( 
        <>
        <div id="home">
        <nav>
              <a href="#">
                <img src={i} style={{width:"12%",height:"12%",borderRadius:"50px"}}></img>
              </a>
            <div >

                <ul  id="navbar">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/support'><a href="index.html">Support</a></Link></li>
                    <li><a href="#hfooter">Contact</a></li>
                    <li>{!user.email?<Link to='/login'>Login/SignUp</Link>:
                    <h4>{user.email}<UserLogout/></h4>}</li>
                </ul>
            </div>
        </nav>
        </div></>
     );
}

export default NavBar;