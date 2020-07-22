import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Header=({text})=>(
  <div>
    <h1>{text}</h1>
  </div>
)
const Button=(props)=>(
    <button onClick={props.handlerClick}>{props.text}</button>
)


const App=(props)=>{
  const initArray=[0,0,0,0,0,0]
  const [selected,setSelected]=useState(0)
  const [vote,setVote]=useState(initArray)
  const [mostVote,setMostVote]=useState(0)
  
  const findAnecdote=()=>{
    const n=Math.floor(Math.random() * (5 - 0) + 0); 
    setSelected(n)
  }

  const pool=()=>{
    const copyVote=[ ...vote]
    copyVote[selected]+=1
    setVote(copyVote)
    const most= copyVote.indexOf(Math.max(...copyVote));
     setMostVote(most)
  }

  /*const setMostVoted=()=>{
    const most= vote.indexOf(Math.max(...vote));
    setMostVote(most)
  }*/
  return (
    <div>
      <Header text='Anecdote of the day'/>
      <div>{props.anecdotes[selected]}</div>
      <div>Vote {vote[selected]}</div>
      <Button handlerClick={pool} text='Vote'/>
      <Button handlerClick={findAnecdote} text='next anecdote'/>
      <Header text='Anecdote with most votes'/>
      <div>{props.anecdotes[mostVote]}</div>
      <div>has {vote[mostVote]} votes</div>
      
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)