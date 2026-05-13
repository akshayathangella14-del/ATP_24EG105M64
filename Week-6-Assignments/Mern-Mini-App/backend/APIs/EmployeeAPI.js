//Create mini-express app (Separate route)
import exp from 'express'
import { EmployeeModel } from '../models/EmployeeModel.js'
import { config } from 'dotenv'

config()

export const employeeApp = exp.Router()

//DEFINE EMPLOYEE REST API Routes

//Create new employee
employeeApp.post("/employees", async (req, res) => {
    const newEmployee = req.body;
    const newEmployeeDocument = new EmployeeModel(newEmployee)
    const result = await newEmployeeDocument.save()
    console.log("result: ", result)
    res.status(201).json({ message: "Employee created" })
})


employeeApp.get("/employees", async (req, res) => {
    let employeesList = await EmployeeModel.find()
    res.status(200).json({ message: "employees", payload: employeesList })
})

//Update a employee by id  
employeeApp.put("/employees/:id", async (req, res) => {
    const modifiedEmployee = req.body
    const eid = req.params.id
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(eid, { $set: { ...modifiedEmployee } }, { returnDocument: "after"}) //new is used to return updated document
    if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee modified", payload: updatedEmployee })
})

//Delete the employee by id
employeeApp.delete("/employees/:id", async (req, res) => {
    const eid = req.params.id
    const deletedEmployee = await EmployeeModel.findByIdAndDelete(eid)
    if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted", payload: deletedEmployee })
})

