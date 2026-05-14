import {Schema, model} from 'mongoose'
//Create User Schema(productId,productName,price,brand)
const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"productId is required"]
    },
    productName:{
        type:String,
        required:[true,"productName is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"Minimum price should be 10000"],
        max:[50000,"Price exceeds 50000"]
    },
    brand:{
        type:String,
        required:[true,"product brand is required"]
    }
},{
    versionKey:false,
    timestamps:true
})

//Generate productModel
export const ProductModel=model("product",productSchema)