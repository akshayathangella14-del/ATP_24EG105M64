import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import {counterContextObj} from '../contexts/ContextProvider'

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {counter,changeCounter}=useContext(counterContextObj)

  const {
    register,
    handleSubmit,
    // formState: {errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      console.log("Payload being sent:", newEmpObj);
      let res = await fetch("https://mini-mern-app-fiz9.onrender.com/employee-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
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

  console.log(error)

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
      <h1 className="text-5xl text-center text-gray-900 p-5 font-serif">
        Create New Employee
      </h1>
      {/* form */}
      <form className="max-w-md mx-auto shadow-2xl p-10 bg-purple-200 rounded-2xl" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 border p-3 w-full rounded-2xl bg-white"
        />
        <input
          type="email"
          placeholder="Enter email"
          {...register("email")}
          className="mb-3 border p-3 w-full rounded-2xl bg-white"
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border p-3 w-full rounded-2xl bg-white"
        />
        <input
          type="text"
          placeholder="Enter designation name"
          {...register("designation")}
          className="mb-3 border p-3 w-full rounded-2xl bg-white"
        />
        <input
          type="text"
          placeholder="Enter company name"
          {...register("companyName")}
          className="mb-3 border p-3 w-full rounded-2xl bg-white"
        />
        <button
          type="submit"
          className=" bg-purple-800 text-white rounded-2xl p-3 block mx-auto">
          App Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;
