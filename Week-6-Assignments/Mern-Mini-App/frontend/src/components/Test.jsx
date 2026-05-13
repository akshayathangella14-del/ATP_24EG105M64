import { useContext } from "react";
import {counterContextObj} from '../contexts/ContextProvider'
import { useCounterStore } from "../store/CounterStore";

function Test() {
   //call useCounterStore hook to get state of zustand store
  let newCounter1=useCounterStore((state)=>state.newCounter1)
  let incrementCounter1=useCounterStore((state)=>state.incrementCounter1)
  let decrementCounter1=useCounterStore((state)=>state.decrementCounter1)

  const {counter1,changeCounter1}=useContext(counterContextObj)
  console.log("Test")
  return (
    <div className="text-center">
      <h1 className="text-4xl pb-2">Counter: {counter1}</h1>
      <button  onClick={changeCounter1} className="bg-amber-200 p-3 rounded-2xl">Change</button>

      <h1 className="text-4xl pb-2">NewCounter1: {newCounter1}</h1>
      <button  onClick={incrementCounter1} className="bg-blue-200 px-5 py-3 m-5 rounded-2xl">Increment</button>
      <button  onClick={decrementCounter1} className="bg-blue-200 px-5 py-3 m-5 rounded-2xl">Decrement</button>
    </div>
  );
}

export default Test