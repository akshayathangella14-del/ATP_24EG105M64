import { useContext } from "react";
import {counterContextObj} from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from "../store/CounterStore";

function Home() {
  //call useCounterStore hook to get state of zustand store
  let newCounter=useCounterStore((state)=>state.newCounter)
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  let reset=useCounterStore((state)=>state.reset)
  

  const {counter,changeCounter}=useContext(counterContextObj)
  console.log("Home")
  return (
    <div className="text-center">
      <h1 className="text-4xl pb-2">Counter: {counter}</h1>
      <button  onClick={changeCounter} className="bg-amber-200 p-3 rounded-2xl">Change</button>

      <h1 className="text-4xl pb-2">NewCounter: {newCounter}</h1>
      <button  onClick={incrementCounter} className="bg-blue-200 px-5 py-3 m-5 rounded-2xl">Change</button>
      <button  onClick={reset} className="bg-blue-200 px-5 py-3 m-5 rounded-2xl">Reset</button>
      <Test/>
    </div>
  
  );
}

export default Home;
