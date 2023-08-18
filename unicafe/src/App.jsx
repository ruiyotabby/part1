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
  const total = good + bad + neutral

  return (
    <div className="App">
        <Header text='Give feedback' />
        <Button handleClick={addGood} text='Good' />
        <Button handleClick={addNeutral} text='Neutral' />
        <Button handleClick={addBad} text='Bad' />
        <Header text='Statistics' />
        <Statistics count={total} stat={[good, neutral, bad]} />
    </div>
  );
}

const Statistics = ({count, stat}) => {
  if (count === 0) {
    return ( <p>No feedback given</p> )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='Good' count={stat[0]} />
          <StatisticLine text='Neutral' count={stat[1]} />
          <StatisticLine text='Bad' count={stat[2]} />
          <StatisticLine text='All' count={count} />
          <StatisticLine text='Average' count={count/3} />
          <StatisticLine text='Positive' count={((stat[1] * 100) /count)} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, count}) => (
    <tr>
      <td>{text}</td> 
      <td>{count}</td>
    </tr>
)

const Header = ({text}) => <h1>{text}</h1> 

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} >{text}</button>
)

export default App;
