//1.Create HTTP server
import exp from 'express' //since it is a default export so we can use any name
const app = exp()  //we can use any name instead of app to hold express functions  
//Express application contains http server

//use body parser middleware
app.use(exp.json())   //Take the req before it reached to the router (converts json to javascript)
//set a port number
const port = 3000
//assign port number to http server
app.listen(port, () => console.log(`server listening to port ${port}...`))

//Test Data (Replace this test data with DataBase)
let users = []
//2.Create User API(REST API: REpresentational State Transfer)

//Route to handle GET req of Client (http://localhost:3000/users)
app.get('/users', (req, res) => {
    //read all users & send response
    res.json({ message: "All users", payload: users })

})

app.get('/users/:id', (req, res) => {
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
app.post('/users', (req, res) => {
    //get user from client
    const newUser = req.body
    //push user into users
    users.push(newUser)
    //send response
    res.json({ message: "User created" })

})
//Route to handle PUT req of Client
app.put('/users', (req, res) => {
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
app.delete('/users/:id', (req, res) => {   // :id is the paramater
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



let products = []
//1. Read all the products
   app.get('/products', (req, res) => {
    //read all products & send response
    res.json({ message: "All products", payload: products })

})
//2.  Read all product by brand
app.get('/products/:brand', (req, res) => {
    //get id of product from url paramter
    let brandOfUrl = req.params.brand
    //filtering the products by brand
    let filteredProducts = products.filter(productObj => productObj.brand === brandOfUrl)
    if (filteredProducts.length === 0)
        return res.json({ message: "Product not found" })
    res.json({ message: "All products by brand", payload: filteredProducts })
})

//3. Pushing the product into products
app.post('/products', (req, res) => {
    //get product from client
    const newProduct = req.body
    //push product into products
    products.push(newProduct)
    //send response
    res.json({ message: "Product created" })

})
//4. Update a product
app.put('/products', (req, res) => {
    //get updated product from client
    let modifiedProduct = req.body
    //get index of existing product in products array
    let index = products.findIndex(productObj => productObj.productId === modifiedProduct.productId)
    //if product not found
    if (index === -1)
        return res.json({ message: "Product not found" })
    //update product with index
    products.splice(index, 1, modifiedProduct)
    //send response
    res.json({ message: "Product Updated" })
})

//5. Delete a product by id
app.delete('/products/:productId', (req, res) => {
    //get id of product from url paramter
    let idOfUrl = Number(req.params.productId)
    //find index of product
    let index = products.findIndex(productObj => productObj.productId === idOfUrl)
    //if product not found
    if (index === -1)
        return res.json({ message: "Product not found" })
    //delete product by index
    products.splice(index, 1)
    //send response
    res.json({ message: "Product removed" })
})
