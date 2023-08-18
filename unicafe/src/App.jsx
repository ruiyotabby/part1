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
        <Header text='Give feedback' />
        <Button handleClick={addGood} text='Good' />
        <Button handleClick={addNeutral} text='Neutral' />
        <Button handleClick={addBad} text='Bad' />
        <Header text='Statistics' />
        <Display text='Good' count={good} />
        <Display text='Neutral' count={neutral} />
        <Display text='Bad' count={bad} />
    </div>
  );
}

const Display = ({text, count}) => (
  <p>{text}: {count}</p>
)

const Header = ({text}) => <h1>{text}</h1> 

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} >{text}</button>
)

export default App;
