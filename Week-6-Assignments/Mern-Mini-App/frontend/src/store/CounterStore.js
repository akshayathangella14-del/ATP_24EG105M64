import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,
    //add user state (name,age,email)
    user:{name:"Akshaya",email:"akshaya@gmail.com",age:20},
    //function to change email
    changeEmail:()=>set({...user,email:"akshaya14@gmail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"Rahul",age:21}),

    //functions to modify the state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20})),
    reset:()=>set({newCounter:500})

}))