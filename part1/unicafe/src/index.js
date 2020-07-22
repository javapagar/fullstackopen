import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header=(props)=>(
  <div>
    <h1>{props.text}</h1>
  </div>
)

const Button=({handleClick,text}) =>(
  <button onClick={handleClick}>{text}</button>
)

const StatisticRow=(props)=>(
  <tr>
    <td>{props.text}</td> 
    <td>{props.value} {props.percent}</td>
  </tr>
)


const StatisticsTable=(props)=>{
  if(props.good===0 && props.bad===0 && props.bad===0) {
    return (<Header text='No feedback given'/>)
  }
  return(
  <div>
    <table>
      <tbody>
        <StatisticRow text='good' value={props.good}/>
        <StatisticRow text='neutral' value={props.neutral}/>
        <StatisticRow text='bad' value={props.bad}/>
        <StatisticRow text='all' value={props.all}/>
        <StatisticRow text='average' value={props.score/props.all}/>
        <StatisticRow text='positive' value={props.good *100/props.all} percent='%'/>
      </tbody>
    </table>
  </div>
  )
}

const App= ()=>{
  const [good,setGood]=useState(0)
  const [bad, setBad]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [score,setScore]=useState(0.0)
  const [total,setTotal]=useState(0)
  

  const increaseGood=()=>{
    const stat=good+1
    const totalScore=score+1
    const all=total+1
    setGood(stat)
    setTotal(all)
    setScore(totalScore)
  }

  const increaseNeutral=()=>{
    const stat=neutral+1
    const all=total+1
    setTotal(all)
    setNeutral(stat)
  }

  const increaseBad=()=>{
    const stat=bad+1
    const totalScore=score-1
    const all=total+1
    setBad(stat)
    setTotal(all)
    setScore(totalScore)
  }
  
  
  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={increaseGood} text='good'/>
      <Button handleClick={increaseNeutral} text='neutral'/>
      <Button handleClick={increaseBad} text='bad'/>
      <Header text='statistics'/>
      <StatisticsTable good={good} neutral={neutral} bad={bad} all={total} score={score}/>
      
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


