import { useForm } from "react-hook-form";
function FormDemo() {
  const {
    register, //to register from fields
    handleSubmit, //to handle for submission
    formState: { errors }, //to handle validations
  } = useForm();
  const onFormSubmit = (obj) => {
    console.log(obj);
  };

  return (
    <div>
      <h1 className="text-center text-5xl pt-5">Form Demo</h1>
      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="font-semibold">Username:</label>
          <input
            type="text"
            {...register("username", {
              required: "Username required",
              validate:(v)=>v.trim().length!==0|| "White space is invalid",
            //   minLength: 4,
            //   maxLength:10
            })}
            id="username"
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
           {/* {
           errors.username?.type === "minLength" && 
            <p className="text-2xs text-red-500">Minimum length of username is 4</p>
          }
          {
           errors.username?.type === "maxLength" && 
            <p className="text-2xs text-red-500">Maximum length of username is 10</p>
          } */}
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
        <button type="submit" className="bg-red-600 p-2 px-4 block mx-auto text-white rounded-xs">
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormDemo;
