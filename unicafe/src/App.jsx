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
        <Button handleClick={addGood} text='Good' />
        <Button handleClick={addNeutral} text='Neutral' />
        <Button handleClick={addBad} text='Bad' />
        <h1>statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
    </div>
  );
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} >{text}</button>
)

export default App;
