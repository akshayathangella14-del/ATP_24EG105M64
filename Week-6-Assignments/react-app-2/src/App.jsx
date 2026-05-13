import './App.css'
import Counter from './components/Counter.jsx'
import TestRefTypes from './components/TestRefTypes.jsx'
import APIDemo from './components/APIDemo.jsx'
import FormDemo from './components/FormDemo.jsx'
import UserForm from './components/UserForm.jsx'
//function component
function App(){
  //state
  
  //return react element
  return (
     <div>
    {/* <div className = "m-16 min-h-screen">
       <Counter/>  
    </div>
    <TestRefTypes/> */}
     {/* <APIDemo/> */}
     {/* <FormDemo/> */}
     <UserForm/>
    </div>
   
)
}
export default App;