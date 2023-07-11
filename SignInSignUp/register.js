import React, { useState } from 'react';
import './register.css'; 
import { Link } from 'react-router-dom';
function Register(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    
    if (lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
    
    if (email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email address';
    }
    
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
    
    if(!/^\d{10}$/.test(phone)){
        errors.phone = 'Invalid mobile number';
        
    }
    if (city.trim() === '') {
      errors.city = 'City is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setCity('');
      setErrors({});
    }
  };

  return (
    <div className="top3">
    <div className="registration-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="firstName" placeholder='FirstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <input type="text" id="lastName" placeholder='LastName'value={lastName}onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <input type="email" id="email"placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input type="password" id="password"placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          <input type="text" id="phone" placeholder='Mobile Number'value={phone} onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <input type="text" id="city"placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <button type="submit" id="rb1">
        <Link to='/'>Register</Link>
        </button>
        <br></br>
        <Link to='/login'>Already have an account? Login here</Link>
      </form>
    </div>
    </div>
  );
};

export default Register;
