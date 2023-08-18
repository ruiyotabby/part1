import { useState } from 'react'

function App() {
  const ancedotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    'The best way to get a project done faster is to start sooner.',
    'Program testing can be used to show the presence of bugs, but never to show their absence!'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(10).fill(0,0,10));

  const nextAncedote = () => {
    let random = Math.round(Math.random()*10);
    if(random > 9) {
      random = Math.round(Math.random()*10);
    }
    setSelected(random);
  }

  const addVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const sortAncedotes = () => {
    const copy = [...votes];
    copy.sort().reverse()
    const index = votes.indexOf(copy[0])
    return (index)
  }

  return (
    <div className="App">
      <Header text='Ancedote of the day' />
      <p>{ancedotes[selected]}</p>
      <Button handleClick={addVote} text='vote' />
      <Button handleClick={nextAncedote} text='next ancedote' />
      <Header text='Ancedote with most votes' />
      <Favourite count={sortAncedotes()} text={ancedotes[sortAncedotes()]} />
    </div>
  );
}

const Header = ({text}) => (
  <h2>{text}</h2>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Favourite = ({count,text}) => {
  return (
    <p>{text}</p>
  )
}

export default App;
