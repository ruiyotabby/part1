import './App.css';
import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  }

  const addNeutral = () => {
    setNeutral(neutral + 1);
  }

  const addBad = () => {
    setBad(bad + 1);
  }

  return (
    <div className="App">
        <h1>give feedback</h1>
        <button onClick={addGood} >Good</button>
        <button onClick={addNeutral}>Neutral</button>
        <button onClick={addBad}>Bad</button>
        <h1>statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </div>
  );
}

export default App;
