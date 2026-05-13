import { Schema, model} from 'mongoose'

//Create Employee Schema(name,email,mobile,designation,companyName)
//Passing the arguments into the Schema constructor
const employeeSchema = new Schema({
    //structure of User resource/Structure of database document
    name: {
        type: String,
        //Validation rules
        required: [true, "Name is required"],
        minLength: [4, "Minimum length of username is 4 characters"],
        maxLength: [8, "Username size exceed 8 characters"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: [true, "Email already existed"]
    },
    mobile:{
        type:Number,
        required:[true,"Mobile number required"]
    },
    designation:{
        type:String,
        required: [true, "Designation required"]
    },
    companyName:{
        type:String,
        required: [true, "Company name required"]
    }
}, {
    versionKey: false,
    timestamps: true
})
//Generate EmployeeModel
export const EmployeeModel = model("employee", employeeSchema) //export it so that apis can use, It will pluralize user into users in DB
