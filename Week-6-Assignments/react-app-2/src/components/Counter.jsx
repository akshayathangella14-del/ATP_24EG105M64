import {useState} from 'react';
function Counter() {
    console.log(" Counter rendered")
    const [count,setCount] = useState(0); //return state,function to modify state
    //Functions to modify the state
    const increment = ()=>{
        setCount(count + 1)
    };
    const decrement = ()=>{
       setCount(count - 1 )
    };
    const reset=(value)=>{
        setCount(value)
    }
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count:{count}</h1>
            <button onClick={increment} className='p-3 bg-green-500'>+</button>
            <button onClick={decrement} className='p-3 bg-red-500'>-</button>
             <button onClick={()=>reset(0)} className='p-3 bg-blue-500'>reset</button>
        </div>
    )
}
export default Counter;