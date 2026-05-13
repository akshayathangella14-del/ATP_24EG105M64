import { Schema, model, Types } from 'mongoose'

//Create cart schema {product,count}
const cartSchema = new Schema({
    product: {     
        type: Types.ObjectId,
        ref:"product" //name of the productModel
    },
    count: {
        type: Number,
        default: 1
    }
})

//Create User Schema(username,password,email,age)
//Passing the arguments into the Schema constructor
const userSchema = new Schema({
    //structure of User resource/Structure of database document
    username: {
        type: String, //Should be capital 'S' in String
        //Validation rules
        required: [true, "Username is required"],
        minLength: [4, "Minimum length of username is 4 characters"],
        maxLength: [8, "Username size exceed 8 characters"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: [true, "Email already existed"] //optional, not a validation rule
    },
    age: {
        type: Number
    },
    cart: [cartSchema]
}, {
    versionKey: false,
    timestamps: true
})
//Generate UserModel
export const UserModel = model("user", userSchema) //export it so that apis can use, It will pluralize user into users in DB
