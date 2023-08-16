const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
    { part: part1, exercises: 10},
    { part: part2, exercises: 7 },
    { part: part3, exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      {/* <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> */}
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    props.parts.map((el) => (
      <Part part={el.part} exercise={el.exercises} />
    ))
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (

    <p>
      Number of exercises {props.total}
    </p>
  )
}

export default App;