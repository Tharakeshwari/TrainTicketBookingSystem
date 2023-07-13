import React from 'react';
import i from './assets/location.png';
import './SeatSelection.css';
function Traingp() {
    const Train=[
        {id:1,no:'22640',name:'Chennai Express',from:'Mumbai',to:'Chennai',atime:'2:00 am',dtime:'00:00 am'},
        {id:2,no:'12637',name:'Pandian Express',from:'Chennai',to:'Madurai',atime:'21:20 pm',dtime:'6:45 am'},
        {id:3,no:'02084',name:'Jan Shatabdi Express',from:'Coimbatore',to:'Mayiladuturai',atime:'7:50 am',dtime:'13:30 pm'},
        {id:4,no:'12631',name:'Nellai Express',from:'Tirunelvelli',to:'Chennai',atime:'19:25 pm',dtime:'7:10 am'},
        {id:5,no:'20644',name:'Vande Bharat',from:'Coimbatore',to:'Chennai',atime:'6:00 am',dtime:'11:50 am'},
        {id:6,no:'12430',name:'SF Express',from:'New Delhi',to:'Lucknow',atime:'20:25 pm',dtime:'6:00 am'},
        {id:7,no:'12951',name:'Rajdhani Express',from:'Mumbai',to:'New Delhi',atime:'16:35 pm',dtime:'8:30 am'},
        {id:8,no:'12267',name:'Duronto Express',from:'Mumbai',to:'Ahmedabad',atime:'23:25 pm',dtime:'5:55 am'},
        {id:9,no:'11077',name:'Jhelum Express',from:'Pune',to:'Jammu',atime:'17:25 pm',dtime:'10:10 am'},
        {id:10,no:'12506',name:'North East Express',from:'Delhi',to:'Guwahati',atime:'6:45 am',dtime:'16:50 pm'}
]
    return ( 
        <>
        <div className='tg1'>
            {Train.map((mp)=>(
            <div className='tg2t'>
            <div className='tg2'>
                <div className='tg3t'>
                <div style={{paddingLeft:'5%',height:'100%'}}>
                    <img src={i} style={{width:'60%',height:'100%',paddingLeft:'9%'}}></img>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>{mp.name}</span>
                    <p>{mp.no}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{mp.from}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{mp.to}</p>
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
                    <button id="trainbutton" style={{paddingBottom:'15px',paddingLeft:'30px',paddingTop:'10px',display:'flex',marginTop:'2rem',width:'100%',borderRadius:"50px",backgroundColor:"rgb(255, 205, 111)"}} type='submit'>Check Availability</button>
                    </center>
                </div>
                </div>
            </div>
            </div>
            ))}
        </div>
        </>
     );
}

export default Traingp;