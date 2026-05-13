import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router'
import axios from 'axios'
import { useContext } from "react";
import {counterContextObj} from '../contexts/ContextProvider'

function ListOfEmps() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emps,setEmps]=useState([])
  const navigate=useNavigate()
  const {counter,changeCounter}=useContext(counterContextObj)

  const gotoEmployee=(empObj)=>{
    //navigate to /employee along with selected employee object
    navigate("/employee",{state:empObj})
  }
   const gotoEditEmployee=(empObj)=>{
    //navigate to /employee along with selected employee object
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmpByID=async(id)=>{
    let res=await axios.delete(`https://mini-mern-app-fiz9.onrender.com/employee-api/employees/${id}`,deleteEmpByID)
    if(res.status===200){
      //get latest emps data
     getEmps();
    }
  }

  //get all emps
  async function getEmps(){
     try {
     setLoading(true);
      let res = await fetch('https://mini-mern-app-fiz9.onrender.com/employee-api/employees')
      if(res.status===200){
        let resObj=await res.json()
        setEmps(resObj.payload)
      }else {
        let errorRes = await res.data;
        console.log("error response is ", errorRes)
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch ", err)
      setError(err.message);
    } finally {
      setLoading(false);
    }
    }
        //get all empson component loading
    useEffect(()=>{
    getEmps();
   },[])

    if (loading) {
    return <p className="text-center text-4xl">Loading...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500 text-5xl">{error}</p>
  } 


  return (
    <div>
      <div className="text-center">
      <h1 className="text-4xl pb-2">Counter:{counter}</h1>
      <button  onClick={changeCounter} className="bg-amber-200 p-3 rounded-2xl">Change</button>
    </div>
      <h1 className='text-4xl text-center font-serif'>List of Employees</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5 text-center'>
        {
          emps.map((empObj)=>(
            <div key={empObj._id} className='bg white p-5 gap-6 shadow-2xl rounded-2xl bg-purple-200'>
              <p>{empObj.email}</p>
              <p className='m-4'>{empObj.name}</p>
              {/* 3 buttons */}
              <div className='flex justify-around'>
              <button onClick={()=>gotoEmployee(empObj)} className='px-4 py-2 rounded-2xl bg-teal-500 text-white'>View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className='px-4 py-2 rounded-2xl bg-amber-500 text-white'>Edit</button>
              <button onClick={()=>deleteEmpByID(empObj._id)} className='px-4 py-2 rounded-2xl bg-rose-500 text-white'>Delete</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default ListOfEmps