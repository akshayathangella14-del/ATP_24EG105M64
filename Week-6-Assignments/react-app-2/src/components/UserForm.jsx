import { useForm } from "react-hook-form";
import { useState } from "react";

function UserForm() {
const [users,setUsers]= useState([]);
  const {
    register, //to register from fields
    handleSubmit, //to handle for submission
    formState: { errors }, //to handle validations
  } = useForm();
  
  const onFormSubmit = (newUserObj) => {
     setUsers([...users,newUserObj])
  };

  return (
    <div>
      <h1 className="text-center text-5xl pt-5">User Form</h1>
      <form
        className="max-w-md mx-auto mt-10 border-4 p-10"
        onSubmit={handleSubmit(onFormSubmit)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="firstname" className="font-semibold">Firstname:</label>
          <input
            type="text"
            {...register("firstname", {
              required: "Firstname required",
              validate:(v)=>v.trim().length!==0|| "White space is invalid",
            })}
            id="firstname"
            className="border w-full p-2"
          />
          {
          errors.username?.type === "required" && 
            <p className="text-balance text-red-500">{errors.username.message}</p>
          }
          {
          errors.username?.type === "validate" && 
            <p className="text-balance text-red-500">{errors.username.message}</p>
          }
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="font-semibold">Email:</label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="border w-full p-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="font-semibold">Date of Birth:</label>
          <input
            type="date"
            {...register("dob")}
            id="dob"
            className="border w-full p-2"
          />
        </div>

        <button type="submit" className="bg-red-600 p-2 px-4 block mx-auto text-white rounded-xs">
          Add User
        </button>
      </form>
      <table  className="mt-5 w-full max-w-3xl mx-auto border border-black bg-blue-200 overflow-hidden">
            <thead>
            <tr>
                <th className="py-3 px-4 border">Firstname:</th>
                <th className="py-3 px-4 border">Email:</th>
                <th className="py-3 px-4 border">DOB:</th>
            </tr>
            </thead>
            <tbody className="bg-amber-100 text-center">
            {
                users.map((userObj,index)=><tr key={index}>
                    <td className="py-3 px-4 border">{userObj.firstname}</td>
                    <td className="py-3 px-4 border">{userObj.email}</td>
                    <td className="py-3 px-4 border">{userObj.dob}</td>
                </tr>)
            }
            </tbody>
        </table>
    </div>
  );
}
export default UserForm;
