import React, { useState } from 'react';
import './BMI.css';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  const getBMIStatus = () => {
    if (bmi) {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
      } else {
        return 'Overweight';
      }
    }
    return '';
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <label>
        Height (m):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>You are {getBMIStatus()}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;
