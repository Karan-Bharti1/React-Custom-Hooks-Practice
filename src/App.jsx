import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounter, useFetch, useLogger, useToggle } from './customHooks'
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
 function ToggleSwitch() {
  const { value, toggle } = useToggle(false);
  return (
    <div>
      <h1>Current State: {value ? "True" : "False"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
console.log(error)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
function LoggerComponent() {
  const { value, setValue } = useLogger('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </div>
  );
}
function App() {


  return (
    <>
      <Counter/>
      <ToggleSwitch/>
      <UserList/>
      <LoggerComponent/>
    </>
  )
}

export default App
