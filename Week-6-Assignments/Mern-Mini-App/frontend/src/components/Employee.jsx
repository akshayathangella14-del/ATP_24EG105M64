import { useLocation } from "react-router"

function Employee() {

  //read state received in navigation
  const {state}=useLocation()
  return (
    <div className="max-w-md mx-auto shadow-2xl p-10 bg-purple-200 rounded-2xl mt-5 text-center text-balance">
      <p className="p-2 font-semibold">Name: {state.name}</p>
      <p className="p-2 font-semibold">Email: {state.email}</p>
      <p className="p-2 font-semibold">Mobile No.: {state.mobile}</p>
      <p className="p-2 font-semibold">Designation: {state.designation}</p>
      <p className="p-2 font-semibold">Company Name: {state.companyName}</p>

    </div>
  )
}

export default Employee