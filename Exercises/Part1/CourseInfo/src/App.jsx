import React from "react"
import Header from "../Components/Header"
import Total from "../Components/Total"
import Content from "../Components/Content"
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const count = exercises1 + exercises2 + exercises3
  const contents = [part1,part2,part3];
  const counters = [exercises1,exercises2,exercises3]
  return (
    <div>
      <Header name={course} />
      <Content contents={contents} counter={counters}/>
      <Total count={count} />
    </div>
  )
}

export default App