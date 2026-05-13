//Create mini-express app(Seperate Route) 
import exp from 'express'
export const userApp = exp.Router() 
//Test Data (Replace this test data with DataBase)
let users = []
//2.Create User API(REST API: REpresentational State Transfer)
//Route to handle GET req of Client (http://localhost:3000/users)
userApp.get('/users', (req, res) => {
    //read all users & send response
    res.json({ message: "All users", payload: users })

})

userApp.get('/users/:id', (req, res) => {
    //get id of user from url paramter
    let idOfUrl = Number(req.params.id) //{id : 64}
    //find index of user
    let index = users.findIndex(userObj => userObj.id === idOfUrl)
    //if user not found
    if (index === -1)
        return res.json({ message: "User not found" })
    //read a user by id
    res.json({ message: "A user", payload: users })

})


//Route to handle POST req of Client 
userApp.post('/users', (req, res) => {
    //get user from client
    const newUser = req.body
    //push user into users
    users.push(newUser)
    //send response
    res.json({ message: "User created" })

})
//Route to handle PUT req of Client
userApp.put('/users', (req, res) => {
    //get updated user from client
    let modifiedUser = req.body
    //get index of existing user in users array
    let index = users.findIndex(userObj => userObj.id === modifiedUser.id)
    //if user not found
    if (index === -1)
        return res.json({ message: "User not found" })
    //update user with index
    users.splice(index, 1, modifiedUser)
    //send response
    res.json({ message: "User Updated" })

})
//Route to handle DELETE req of Client 
userApp.delete('/users/:id', (req, res) => {   // :id is the paramater
    //get id of user from url paramter
    let idOfUrl = Number(req.params.id) //{id : 64}
    //find index of user
    let index = users.findIndex(userObj => userObj.id === idOfUrl)
    //if user not found
    if (index === -1)
        return res.json({ message: "User not found" })
    //delete user by index
    users.splice(index, 1)
    //send response
    res.json({ message: "User removed" })

})