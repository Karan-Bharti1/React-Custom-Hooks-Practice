import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter } from './customHooks'
function Counter(){
  const { counter, increment, decrement, reset } = useCounter(0);
  return(
    <div>
  <h1>Counter: {counter}</h1>
  <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
 }
function App() {


  return (
    <>
      <Counter/>
    </>
  )
}

export default App
