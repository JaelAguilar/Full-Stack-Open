import React, { useState } from "react";

const Button = ({ text, func }) => (<button onClick={func}>{text}</button>)

const Stats = ({allClicks, text, count, perc }) => {
  if (allClicks === 0) {
    
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{count}{perc}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, allClick, average, positive }) => {
  if (allClick === 0) {
    return (<div>No feedback given</div>)
  }
  return (
    <div>
      <table>
        <tbody>
        <Stats text="Good" count={good}></Stats>
        <Stats text="Neutral" count={neutral}></Stats>
        <Stats text="Bad" count={bad}></Stats>
        <Stats text="All" count={allClick}></Stats>
        <Stats text="Average" count={average}></Stats>
        <Stats text="Positive" count={positive} perc="%"></Stats>
        </tbody>
        </table>
    </div>
  )

    
}

const Title = ({ title }) => (<div><h2>{title}</h2></div>)

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Sets all the stats
  const [allClick, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  

  const increaseGood = () => {
    setGood(good + 1)
    setAll(allClick + 1)
    setAverage((good - bad + 1) / (allClick + 1))
    setPositive(100 * (good + 1) / (allClick + 1))
  }
  
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClick + 1)
    setAverage((good - bad) / (allClick + 1))
    setPositive(100*(good) / (allClick + 1))
  }
  const increaseBad = () => {
    setBad(bad + 1)
    setAll(allClick + 1)
    setAverage((good - bad - 1) / (allClick + 1))
    setPositive(100*(good) / (allClick + 1))
  }

  

  return (
    <div>
      <Title title="Give Feedback"></Title>
      <Button text="Good" func={increaseGood}></Button>
      <Button text="Neutral" func={increaseNeutral}></Button>
      <Button text="Bad" func={increaseBad}></Button>
      <Title title="Statistics"></Title>
      <Statistics good={good} neutral={neutral} bad = {bad} allClick={allClick} average={average} positive={positive}></Statistics>

    </div>
  )
}

export default App;
