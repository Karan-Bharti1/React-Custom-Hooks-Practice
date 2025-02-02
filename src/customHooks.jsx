import { useEffect, useState } from 'react'
export function useCounter(init){
    const [counter,setCounter]=useState(init)
const increment=()=>setCounter(count=>count+1)
const decrement=()=>setCounter(count=>count-1)
const reset=()=>setCounter(0)
    return{counter, increment, decrement, reset}
}
export function useToggle(init){
    const [value,setValue]=useState(init)
    const toggle=()=>setValue(!value)
    return{value,toggle}
}
export  function useFetch(url){
const [data,setData]=useState()
const [loading,setLoading]=useState(false)
const [error,setError]=useState()

useEffect(()=>{
setLoading(true)
fetch(url).then(res=>res.json())
.then(data=>setData(data))
.catch(error=>setError(error))
.finally(()=>setLoading(false))
},[url])
return {data,loading,error}
}
 export function useLogger(message){
 const [value,setValue]=useState(message)   
value.length>0&&console.log("Value Changed to: ",value)
 return {value,setValue}
 }
 export function useLocalStorage(key,initialValue){
const storedData=localStorage.getItem(key)
const [value,setValue]=useState(storedData ? JSON.parse(storedData) : initialValue)
useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return {value,setValue}
 }