import React from "react"

const Part = (props) => (
  <div>
    <p>
      {props.part.name}, {props.part.exercises}
    </p>
  </div>
)

const Header = (props) => (
  <div>
    <h1>{props.name}</h1>
  </div>
)

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Total = (props) => (
  <div>
    <p>
      Number of exercises{" "}
      {Object.values(props.parts).reduce(
        (accumulator, { exercises }) => accumulator + exercises,
        0
      )}
    </p>
  </div>
)

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App
