import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './logo.png';
import'./Signin.css';

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log('Signin Form Data:', formData);
      navigate('/Home');
    }
  };
  
  return (
    <div className="whole">
    <div className="signpage">
    <img src={img} style={{height:"175px", marginLeft:"530px"}}/>
    <div className="element">
    <h2 style={{textAlign:'center', fontFamily:'serif', fontWeight:'bold'}}>Signin</h2>
    <form onSubmit={handleSubmit}>
    <div className="emaildet">
    <label style={{fontFamily:'serif'}}>
    Email:
    <input
    type="email"
    name="email"
    value={formData.email}
    required
    onChange={handleChange}
    />
    <span style={{ color: 'red' }}>{errors.email}</span>
    </label>
    <br />
    <label style={{fontFamily:'serif'}}>
    Password:
    <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    />
    <span style={{ color: 'red' }}>{errors.password}</span>
    </label>
    <br />
    </div>
    <div style={{fontFamily:'serif'}}>
    <button type="submit" style={{textAlign:'center', marginLeft:"47%"}} className="btn btn-warning">Signin</button>
    </div>
    </form>
    </div>
    </div>
    </div>  
    );
  };
  
  export default Signin;