const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      {/* <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} /> */}
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return (
    props.course.parts.map((el) => (
      <Part name={el.name} exercise={el.exercises} />
    ))
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    props.total.map((el) => (
       <p>{el.exercises}</p>
    ))

    // <p>
    //   Number of exercises {props.total}
    // </p>
  )
}

export default App;