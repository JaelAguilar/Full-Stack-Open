import React from "react"

const Title = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Part = ({ part }) => (
  <div>
    <p>
      {part.name}, {part.exercises}
    </p>
  </div>
)

const Header = ({name}) => (
  <div>
    <h2>{name}</h2>
  </div>
)

const Content = ({ parts }) => (
parts.map((part)=><Part key={part.id} part={part} />)
)

const Total = ({ parts }) => (
  <div>
    <p>
      <strong>
        Total of{" "}
        {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
      </strong>
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

const Curriculum = ({ curriculum }) => (
  <div>
    <Title text="Web development curriculum" />
    {curriculum.courses.map((course) => (
      <Course course={course} />
    ))}
  </div>
)

const App = () => {
  const curriculum = {
    title: "Web development currículum",
    courses:[
  {
    name: "Half Stack application development",
    id: 1,
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
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
]
  }
  



  return (
    <div>
      <Curriculum curriculum={curriculum} />
    </div>
  )
}

export default App
