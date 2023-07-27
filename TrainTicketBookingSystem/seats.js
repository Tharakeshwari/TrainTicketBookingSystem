import React, { useEffect, useState } from 'react';
import './seats.css';
import { Link, useLocation } from 'react-router-dom';
import i from './assets/location.png';
import axios from 'axios';

function Display(props) {
  const [pname, setPname] = useState('');
  const [age, setAge] = useState('');
  const [adhar, setAdhar] = useState('');
  const [tclass, setTclass] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(1500);

  const handleOk = () => {

    if (tclass === "AC1") {
      setPrice(1000);
    } else if (tclass === "AC2") {
      setPrice(1250);
    } else if (tclass === "AC3") {
      setPrice(1000);
    } else if (tclass === "FirstClass") {
      setPrice(750);
    } else if (tclass === "SecondClass") {
      setPrice(500);
    } else if (tclass === "Sleeper") {
      setPrice(650);
    }

    const data = {
      pname,
      age,
      adhar,
      tclass,
      gender,
      price,
    };
console.log(data);
    // Call the callback function with the data
    props.onDataChange(data);
  };

  return (
    <>
      <div className='i11'>
        <br />
        <br />
        <fieldset style={{ width: '90%' }}>
          <legend>PASSENGER {props.n + 1}</legend>
          <input
            type='text'
            placeholder='Name'
            style={{ border: 'none', width: '17%', height: '3vh', borderRadius: '10px' }}
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
          <br />
          <br />
          <input
            type='number'
            placeholder='Age'
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />
          <input
            type='text'
            placeholder='Aadhar Number'
            style={{ border: 'none', width: '17%', height: '3vh', borderRadius: '10px' }}
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
          />
          <br />
          <br />
          <select
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' }}
            value={tclass}
            onChange={(e) => setTclass(e.target.value)}
          >
            <option value='AC1'>AC 1</option>
            <option value='AC2'>AC 2</option>
            <option value='AC3'>AC 3</option>
            <option value='Sleeper'>SLEEPER</option>
            <option value='FirstClass'>FIRST CLASS</option>
            <option value='SecondClass'>SECOND CLASS</option>
          </select>
          <br />
          <br />
          <select
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='Gender'>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Others'>Others</option>
          </select>
          <br />
          <br />
          <button onClick={handleOk}>OKAY</button>
        </fieldset>
      </div>
    </>
  );
}

function Seat() {
  
  const location = useLocation();
  const data = location.state;
  const [content, addContent] = useState([]);
  const [total, setTotal] = useState();
  const [mt, setMt] = useState({});
  const [passengerData, setPassengerData] = useState([]);
  const [num, setNum] = useState(0);
  const [forms, setForms] = useState([]);
  const[displayAmt,setdisplayAmt]=useState("none");
  const[temp,setTemp]=useState("block");
  
  useEffect(() => {
    let str = "http://localhost:8181/trainclass?tId=";
    str = str + data.train_no;
    axios.get(str).then(function (response) {
      addContent(response.data);
    }, []);
    content.map((value) => {
      setMt({
        ac1: value.ac1,
        ac2: value.ac2,
        ac3: value.ac3,
        first: value.first,
        second: value.second,
        sleeper: value.sleeper,
      });
    });
  }, []);
  const handleDataChange = (data) => {
    setPassengerData((prevData) => [...prevData, data]);
  };

  const handleSubmit = () => {
    const formsArray = [];
    for (let i = 0; i < num; i++) {
      formsArray.push(<Display key={i} n={i} onDataChange={handleDataChange} />);
    }
    setForms(formsArray);
  };


  const handlePay=()=>{
    let sum=1500;
    passengerData.map((passenger, index) => {
        sum=sum+passenger.price;
    })
    setTemp("none");
    console.log(sum);
    setTotal(sum);
    setdisplayAmt("block");
    alert(`Total amount Rs.${sum}`);
  }
  const inputStyle = {
    width: '50px', // Set the desired width
    height: '30px', // Set the desired height
    fontSize: '16px', // Set the desired font size
    // Add any other desired styles here
  };

  return (
    <>
      <div className='sl1'>
        <div className='sl2'>
          <h1 style={{ float: 'right', paddingRight: '17%', paddingTop: '1%' }}>
            {data.train_name}
            <br />
            <span style={{ color: 'darkgrey' }}>{data.train_no}</span>
          </h1>
          <div className='tg2t1'>
            <div className='tg2' style={{ width: '90%', marginLeft: '8vh' }}>
              <div className='tg3t'>
                <div style={{ paddingLeft: '5%', height: '100%' }}>
                  <img src={i} style={{ width: '60%', height: '100%', paddingLeft: '9%' }} />
                </div>
              </div>
              <div className='tg3t'>
                <div className='tg3'>
                    <span>{data.train_name}</span>
                    <p>{data.train_no}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{data.source}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{data.destination}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>ARRIVAL TIME</span>
                    <p>{data.atime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>DEPATURE TIME</span>
                    <p>{data.dtime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>DISTANCE</span>
                    <p>{data.distance}</p>
                </div>
                </div>
                </div>
                <br></br><br></br>
            <div className='tg21'>
                <br></br>
                <fieldset style={{width:"90%"}}> <legend>AVAILABLE SEATS</legend>
               
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>AC1 CLASS</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>{mt.ac1}</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>[1500]</span><br></br>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>AC2 CLASS</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>{mt.ac2}</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>[1250]</span><br></br>
                </div>
                </div>
        
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>AC3 CLASS</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>{mt.ac3}</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>[1000]</span><br></br>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>FIRST CLASS</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>{mt.first}</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>[750]</span><br></br>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>SECOND CLASS</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>{mt.second}</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>[500]</span><br></br>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>SLEEPER CLASS</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>{mt.sleeper}</span><br></br>
                    <span style={{color:'darkgray',textDecoration:'none'}}>[650]</span><br></br>
                </div>
                </div>
        
                </fieldset>
                <br></br>
              <span style={{ fontSize: 'larger', fontWeight: 'bold' }}>NUMBER OF PASSENGERS: </span>
              <input type='number' min={0} onChange={(e) => setNum(e.target.value)} style={inputStyle} />
              &nbsp;&nbsp;&nbsp;
              <button
                type='submit'
                style={{ width: '15vh', height: '25px', borderRadius: '50px', backgroundColor: 'black', color: 'white'}}
                onClick={handleSubmit}
              >
                Proceed
              </button>
              <br />
              {forms}
              {/* {passengerData.map((passenger, index) => (
            <div key={index} className="passenger-data">
              <h3>PASSENGER {index + 1}</h3>
              <p>Name: {passenger.pname}</p>
              <p>Age: {passenger.age}</p>
              <p>Aadhar Number: {passenger.adhar}</p>
              <p>Class: {passenger.tclass}</p>
              <p>Gender: {passenger.gender}</p>
              <p>Price: {passenger.price}</p>
            </div>
          ))} */}
            </div>
          </div>
          <center>
            <div>
            {/* <Link to='/payment'> */}
            <div style={{display:temp}}>
              <button
                type='submit'
                style={{
                  color: 'white',
                  backgroundColor: 'orange',
                  width: '15%',
                  height: '5vh',
                  borderRadius: '50px',
                  fontSize: '18px'
                }}
                onClick={handlePay}
              >
                Proceed
              </button>
              </div>
              </div>
            {/* </Link> */}
            <div style={{display:displayAmt}}>
            <Link
          to={{
            pathname: '/payment',
          }}
        >
            <button
                type='submit'
                style={{
                  color: 'white',
                  backgroundColor: 'orange',
                  width: '15%',
                  height: '5vh',
                  borderRadius: '50px',
                  fontSize: '18px'
                }}
              >
                Make Payment
              </button>
            </Link>
              </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Seat;
