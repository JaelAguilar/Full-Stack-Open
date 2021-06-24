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

const Header = ({ name }) => (
  <div>
    <h2>{name}</h2>
  </div>
)

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />)

const Total = ({ parts }) => (
  <div>
    <p>
      <strong>
        Total of {parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
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
    <Title text={curriculum.text} />
    {curriculum.courses.map((course) => (
      <Course course={course} />
    ))}
  </div>
)

export default Curriculum