//create express app
import exp from 'express'
import { connect } from 'mongoose'
import { employeeApp } from "./APIs/EmployeeAPI.js"
import { config } from 'dotenv'
import cors from 'cors'


config()

const app = exp()
app.use(cors());
app.use(exp.json())


app.use("/employee-api", employeeApp)

const port = process.env.PORT || 4000
//connect to DB server
async function connectDB() {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connection success")

        //start server
        app.listen(port, () => console.log("Server on port 4000..."))
    } catch (err) {
        console.log("err in DB connection: ", err)
    }
}
connectDB()

//error handling middleware
app.use((err, req, res, next) => {
    // res.json({message:"error occured",reason:err.message}) error=>{name,message,callstack}
    console.log(err.name)
    //ValidationError
    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: "Error occured", error: err.message })
    }
    //CastError
    if (err.name === 'CastError') {
        return res.status(400).json({ message: "Error occured", error: err.message })
    }
    //send server side error
    res.status(500).json({ message: "Error occured", error: "Server side error" })
})
