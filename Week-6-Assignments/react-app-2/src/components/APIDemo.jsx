import {useState,useEffect} from 'react';
function APIDemo(){
    console.log("API demo rendered");
    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);

    useEffect(()=>{
        async function getData(){
            //set loading state to true
            setLoading(true);
            try{
            let res=await fetch("https://jsonplaceholder.typicode.com/posts")
                let usersList=await res.json();
                setUsers(usersList);
            } catch(err){
                console.log("Error is ",err);
                //update error state
                setError(err);
            } finally{
               setLoading(false); 
            }
        } 
        getData();
    },[]);
    //deal with loading state
    if(loading===true){
        return <p className='text-center text-5xl'>Loading...</p>
    }
     if(error!==null){
        return <p className='text-center text-red-500 text-5xl'>{error.message}</p>
    }

    return(
        <div className='text-center mt-10'>
           <h1 className='text-5xl text-blue-900 font-extrabold font-serif pb-5'>List of Users</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    users.map((userObj)=>(
                        <div className="text-center p-1 shadow-2xl rounded-3xl - bg-gradient-to-r from-pink-200 to-blue-100" key={userObj.id}>
                            <p>{userObj.title}</p>
                            <p>{userObj.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default APIDemo;