import React from "react"
import Header from "../Components/Header"
import Total from "../Components/Total"
import Content from "../Components/Content"
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
  const count = 10+7+14;
  return (
    <div>
      <Header name={course.name} />
      <Content contents={course.parts} />
      <Total count={count} />
    </div>
  )
}

export default App