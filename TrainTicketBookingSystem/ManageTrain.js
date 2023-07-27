import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SeatSelection.css';
import i from './assets/location.png';
import './ManageTrain.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ManageTrain() {
  const navigate = useNavigate();
  const [content, addContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8181/trains/').then(function (response) {
      addContent(response.data);
    });
  }, []);


  return (
    <>
    <div style={{overflowX:"none"}}>
      <div className='tg111' >
        <div className='tg3t11'>
          <div className='tg311' style={{ width: '200%' }}>
            <center>
              <Link to="/addtrain">
                <button style={{ width: '40%',height:"6vh",borderRadius:"15px",backgroundColor:"grey"}} type='submit'>Add Train</button>
              </Link>
            </center>
          </div>
        </div>
        <div >
        {content.map((mp) => (
          <div className='tg2t11' key={mp.train_no} style={{width:"195vh"}}>
            <div className='tg211'>
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
              <div className='tg3t11' >
                <div className='tg311'>
                  <center>
                    <button style={{ width: '50%',backgroundColor:'rgb(255, 205, 111)',color:'white',height:"4vh",borderRadius:"15px"}}onClick={()=>navigate('/updatetrain',{state:{id:mp.train_no}})}>Edit</button>
                  </center>
                </div>
              </div>

            </div>
            <br></br><br></br>
              <div className='tg3t11'>
                <div className='tg311'>
                  <center>
                  <button style={{ width: '50%',backgroundColor:'rgb(255, 205, 111)',color:'white',height:"4vh",borderRadius:"15px"}} onClick={()=>navigate('/deletetrain',{state:{id:mp.train_no}})}>Delete</button>
                  </center>
                </div>
              </div>
          </div>
        ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default ManageTrain;