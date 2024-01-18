import React, { useState } from 'react';
import body from '../Bodyfat/Bodyfatcalculator.webp.jpg';
import './BodyFatCalculator.css';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [tricep, setTricep] = useState('');
  const [suprailiac, setSuprailiac] = useState('');
  const [abdominal, setAbdominal] = useState('');
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    // Jackson-Pollock 3-Site Skinfold formula for males and females
    const sum = parseFloat(tricep) + parseFloat(suprailiac) + parseFloat(abdominal);
    const bodyDensity = gender === 'male' ? 0.29288 - 0.0005 * sum + 0.000002 * sum * sum - 0.00032810 * age : 0.29669 - 0.00043 * sum + 0.0000025 * sum * sum - 0.00013280 * age;

    // Body fat percentage calculation using Brozek formula
    const bodyFatPercentage = (495 / bodyDensity) - 450;

    setBodyFat(bodyFatPercentage.toFixed(2));
  };

  const resetForm = () => {
    setGender('male');
    setAge('');
    setTricep('');
    setSuprailiac('');
    setAbdominal('');
    setBodyFat(null);
  };
  
  return (
    <>
    <div className="whole3">
    <div className="d-flex flex-row">
    <div className="body-fat-calculator">
    <div className="list">
    <label>
    <p style={{fontWeight:"bold", fontFamily:"initial", fontSize:"30px", textAlign:"center"}}>Body Fat Percentage</p>
    Gender:
    <select value={gender} onChange={(e) => setGender(e.target.value)}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    </select>
    </label>
    <label>
    Age:
    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
    </label>
    <label>
    Tricep Skinfold (mm):
    <input type="number" value={tricep} onChange={(e) => setTricep(e.target.value)} />
    </label>
    <label>
    Suprailiac Skinfold (mm):
    <input type="number" value={suprailiac} onChange={(e) => setSuprailiac(e.target.value)} />
    </label>
    <label>
    Abdominal Skinfold (mm):
    <input type="number" value={abdominal} onChange={(e) => setAbdominal(e.target.value)} />
    </label>
    <button onClick={calculateBodyFat} style={{backgroundColor: 'red', width:"180px"}}>Calculate Body Fat</button>
    {bodyFat !== null && (
      <div>
      <h3>Result:</h3>
      <p>Your estimated body fat percentage is {bodyFat}%.</p>
      </div>
      )}
      <button className='hi' onClick={resetForm} style={{backgroundColor: 'red', width:"80px"}}>Reset</button>
      </div>
      </div>
      <div className="image">
        <img src={body} style={{height:"250px"}} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
      </center>
      </div>
      </div>
      </>
      );
    };
    
    export default BodyFatCalculator;