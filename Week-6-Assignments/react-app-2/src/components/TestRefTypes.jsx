import {useState} from 'react';
function TestRefTypes() {
    const [user,setUser]=useState({username:"Akshaya",age:20,city:"Hyderabad"});
    const [marks,setMarks]=useState([10,20,30]);
    
    //update user state
    const updateUser=()=>{
        setUser({...user,username:"Rahul",age:11});
    };
    const updateMarks=()=>{
        setMarks([...marks,40]);
    };

    return(
        <div className='text-center'>
            <p className='text-3xl'>Username:{user.username}</p>
            <p className='text-3xl'>Age:{user.age}</p>
            <p className='text-3xl'>City:{user.city}</p>
            <button onClick={updateUser} className='p-5 bg-pink-500'>Update User</button>
            {
                marks.map(mark=>(
                    <p marksObj={mark} key={marks}>{mark}</p>
                ))
            }
            <button onClick={updateMarks} className='p-5 bg-blue-500'>Update Marks</button>

        </div>
    )

}
export default TestRefTypes;