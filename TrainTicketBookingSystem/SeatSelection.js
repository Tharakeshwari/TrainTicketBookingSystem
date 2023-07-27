import React from 'react';
import i from './assets/location.png';
import './SeatSelection.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import NavBar from './navbar';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import SearchBar from './searchbar';
function Traingp() {
    const [content, addContent]=useState([]);
    const location=useLocation();
    const f=location.state.from;
    const t=location.state.to;
    const d=location.state.dateofj;
    const data=location.state;
    useEffect(()=>{
        axios.get(`http://localhost:8181/trains/source/${f}/destination/${t}/date/${d}`).then(function (response) {
    addContent(response.data);
    console.log(content);

  });
    });
    return ( 
        <>
        <div style={{paddingTop:"50px"}}>
        <div className='tg1'>
            {content.map((mp)=>(
            <div className='tg2t'>
            <div className='tg2'>
                <div className='tg3t'>
                <div style={{paddingLeft:'5%',height:'100%'}}>
                    <img src={i} style={{width:'60%',height:'100%',paddingLeft:'9%'}}></img>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>{mp.train_name}</span>
                    <p>{mp.train_no}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{mp.source}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{mp.destination}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>ARRIVAL TIME</span>
                    <p>{mp.atime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>DEPATURE TIME</span>
                    <p>{mp.dtime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <center>
                    <Link to='/seats' state={mp}><button style={{cursor:"pointer",transitionDuration:"revert"}} type='submit'>Check Availability</button></Link>
                    </center>
                </div>
                </div>
            </div>
            </div>
            ))}
        </div>
        </div>
        </>
     );
}

export default Traingp;