import { useState } from 'react'
export function useCounter(init){
    const [counter,setCounter]=useState(init)
const increment=()=>setCounter(count=>count+1)
const decrement=()=>setCounter(count=>count-1)
const reset=()=>setCounter(0)
    return{counter, increment, decrement, reset}
}