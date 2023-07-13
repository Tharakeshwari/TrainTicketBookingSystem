import React from 'react'
import './seats.css';
function Seats() {
    const seats = [
        {
          class: 'Air-Conditioned First Class (1AC)',
          price: 'Rs:1500'
        },
        {
          class: 'Air-Conditioned Two-Tier Class (2AC)',
          price: 'Rs:1000'
        },
        {
          class: 'Air-Conditioned Three-Tier Class (3AC)',
          price: 'Rs:850'
        },
        {
          class: 'First Class (FC)',
          price: 'Rs:600'
        },
        {
          class: 'Sleeper Class (SL)',
          price: 'Rs:400'
        },
        {
          class: 'Second Class (2S)',
          price: 'Rs:250'
        },
      ];
    return ( 
        <>
        {seats.map((st, index)=> (
            <div key={index}>
              <div id='divSeats'>
                <div className="sd1"><h2 id="seatclass">{st.class}</h2></div>
                <div className="sd1"style={{float:"right",paddingTop:"20px"}}><input type="number" min="0" style={{width:"40px"}}></input></div>
                <div className="sd1" style={{float:"right",marginRight:"30px"}}><h2 id="seatclass">{st.price}</h2></div>
              </div>
            </div>
          ))} 
        </>
     );
}

export default Seats;