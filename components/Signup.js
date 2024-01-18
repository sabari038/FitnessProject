import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import'./Signup.css';
import img from './logo.png';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    weight: '',
    height: '',
    age: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    weight: '',
    height: '',
    age: '',
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
    const newErrors = {
      username: '',
      email: '',
      password: '',
      name: '',
      weight: '',
      height: '',
      age: '',
    };

    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.weight || isNaN(formData.weight)) {
      newErrors.weight = 'Invalid weight';
      isValid = false;
    }

    if (!formData.height || isNaN(formData.height)) {
      newErrors.height = 'Invalid height';
      isValid = false;
    }

    if (!formData.age || isNaN(formData.age)) {
      newErrors.age = 'Invalid age';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = () => {
    const isValid = validateForm();

    if (isValid) {
      console.log('Signup Form Data:', formData);
      navigate('/Signin');
    }
  };

  return (
    <div className="whole2">
    <img src={img} style={{height:"125px", marginLeft:"970px"}}/>
    <div className="signpg">
    <h2 style={{textAlign:"center"}}>Signup</h2>
    <br />
    <form onSubmit={(e) => e.preventDefault()}>
    <label>
      Username:
      <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.username}</span>
      </label>
      <label>
      Name:
      <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.name}</span>
      </label>
      <label>
      Age:
      <input
      type="number"
      name="age"
      value={formData.age}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.age}</span>
      </label>
      <label>
      Email:
      <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.email}</span>
      </label>
      <label>
      Password:
      <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.password}</span>
      </label>
      <label>
      Weight (kg):
      <input
      type="number"
      name="weight"
      value={formData.weight}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.weight}</span>
      </label>
      <label>
      Height (cm):
      <input
      type="number"
      name="height"
      value={formData.height}
      onChange={handleChange}
      />
      <span style={{ color: 'red' }}>{errors.height}</span>
      </label>
      <div className="button">
      <button type="button" onClick={handleSignup} className="btn btn-danger">
      Signup
      </button>
      </div>
      </form>
      </div>
      </div>
      );
    };
    
    export default Signup;
    