
import { useState } from 'react';
import './App.css';




function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

//error chekcing 
  function calculateBMI() {
    if (weight.trim() === '' || height.trim() === '') {
      setError('Please enter both weight and height');
      setBmi(null);
      return;
    }

    const w = Number(weight);
    const h = Number(height);
    if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
      setError('Please enter valid numbers greater than zero');
      setBmi(null);
      return;
    }

    //the BMI formula using metrics of meters and kg
    const result = w / (h * h);

    if (!Number.isFinite(result)) {
      setError('Please enter valid weight and height values');
      setBmi(null);
      return;
    }

    setBmi(result);
    setError('');
  }


  function resetCalculator() {
    setWeight('');
    setHeight('');
    setBmi(null);
    setError('');
  }


  function getCategory(value) {
    if (value < 18.5) {
      return 'Underweight';
    } else if (value < 25) {
      return 'Normal weight';
    } else if (value < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }


  return (
    <div className="app-container">
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <p className="subtitle">
          Enter your details below
        </p>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            min="0"
            step="any"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setBmi(null);
              setError('');
            }}
          />
        </div>


        <div className="input-group">
          <label htmlFor="height">Height (m)</label>
          <input
            id="height"
            type="number"
            min="0"
            step="any"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
              setBmi(null);
              setError('');
            }}
          />
        </div>

        {error && <p className="error">{error}</p>}
        <div className="action-buttons">
          <button type="button" onClick={calculateBMI}>
            Calculate BMI
          </button>
          <button type="button" onClick={resetCalculator}>
            Reset


          </button>
        </div>

        {bmi !== null && (
          <div className="result">

            <p>Your BMI is:</p>
            <h2>{bmi.toFixed(1)}</h2>
            <p>
              Category: <strong>{getCategory(bmi)}</strong>
            </p>



          </div>
        )}
      </div>

    </div>
  );
}




export default App;
