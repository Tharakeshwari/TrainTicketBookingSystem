import React, { useState } from 'react';
import './register.css'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { login } from './features/user';
import { useEffect } from 'react';
function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});
  const [content, addContent]=useState([]);
  const user=useSelector(state => state.user.value)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(()=>{
    
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
    addContent(response.data);
    console.log(response.data);
    });
  });
  const handleNext=()=>{
    dispatch(login({email}));navigate("/")
  }
  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    
   
    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
  content.map((value)=>{
    if(value.email===email){
      errors.email = 'EmailId already exists';
    }
  })
    
    if (password === '') {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
    }
     else if (!/\d/.test(password)) {
        errors.password = 'Password must contain atleast one digit';
    }
     else if (!/[a-zA-Z]/.test(password)) {
        errors.password = 'Password must contain atleast one letter';
    }
  else if (!/[!@#$%^&*]/.test(password)) {
        errors.password = 'Password must contain atleast one symbol';
      }
    else if(password!==cpassword){
        errors.cpassword = "Password doesn't match";       
    }
    
    if(!/^\d{10}$/.test(phone)){
        errors.phone = 'Invalid mobile number';
        
    }
    if (city.trim() === '') {
      errors.city = 'City is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  async function handleSubmit(e){
    e.preventDefault();
    if (validateForm()) {
      try{
        const data={
          name:name,
         email:email,
         password:password,
         mobile:phone,
         city:city
      };
      const res=await axios.post("http://localhost:8181/api/v1/auth/register",data);
      await console.log(res);
    }catch(e){
      console.log(e.message);
    }
    handleNext();
    }
  }
  return (
    <div className="top3">
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form >
        <div className="form-group">
          <input required type="text" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <input required type="email" id="email"placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input required type="password" id="password"placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <input required type="password" id="cpassword"placeholder='Confirm Password' value={cpassword} onChange={(e) => setcPassword(e.target.value)}
          />
          {errors.cpassword && <span className="error-message">{errors.cpassword}</span>}
        </div>
        <div className="form-group">
          <input required type="text" id="phone" placeholder='Mobile Number'value={phone} onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <input required type="text" id="city"placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <Link to='/'><button type="submit" id="rb1" onClick={handleSubmit}>
        Register
        </button></Link>
        <br></br>
        <Link to='/login'>Already have an account? Login here</Link>
      </form>
    </div>
    </div>
  );
};

export default Register;
