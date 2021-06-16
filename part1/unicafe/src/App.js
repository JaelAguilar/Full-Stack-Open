import React, { useState } from "react";

const Button = ({ text, func }) => (<button onClick={func}>{text}</button>)

const Stats = ({ text, count, perc }) => (<div><p>{text} {count} {perc}</p></div>)

const Title = ({ title }) => (<div><h2>{title}</h2></div>)

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Sets all the stats
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

 
  const increaseGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good - bad + 1) / (all + 1))
    setPositive(100 * (good + 1) / (all + 1))
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / (all + 1))
    setPositive(100*(good) / (all + 1))
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad - 1) / (all + 1))
    setPositive(100*(good) / (all + 1))
  }

  return (
    <div>
      <Title title="Give Feedback"></Title>
      <Button text="Good" func={increaseGood}></Button>
      <Button text="Neutral" func={increaseNeutral}></Button>
      <Button text="Bad" func={increaseBad}></Button>
      <Title title="Statistics"></Title>

      <Stats text="Good" count={good}></Stats>
      <Stats text="Neutral" count={neutral}></Stats>
      <Stats text="Bad" count={bad}></Stats>
      <Stats text="All" count={all}></Stats>
      <Stats text="Average" count={average}></Stats>
      <Stats text="Positive" count={positive} perc="%"></Stats>
    </div>
  )
}

export default App;

