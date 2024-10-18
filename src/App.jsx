import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2=()=>{
    alert('second button clicked')
  }
  const addToFive=(num)=>{
    alert(num +5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
    <Team></Team>
    <Counter></Counter>
      <button onClick={handleClick}>Click Me1</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert('third button click')}}>Click Me3</button>
      <button onClick={()=>addToFive(95)}>add</button>
    </>
  )
}

export default App
