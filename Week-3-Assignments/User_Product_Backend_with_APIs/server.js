//1.Create HTTP server
import exp from 'express' //since it is a default export so we can use any name
const app = exp()  //we can use any name instead of app to hold express functions  
import {userApp} from "./APIs/UserAPI.js"
import {productApp} from "./APIs/ProductAPI.js"
//Express application contains http server

//use body parser middleware
app.use(exp.json())   //Take the req before it reached to the router (converts json to javascript)

//Create custom middleware
function middleware1(req,res,next){
   //send res from middleware
    //res.json({message:"This res from middleware1"})
   //Can forward req to next
   console.log("middleware1 executed")
   next()
}

function middleware2(req,res,next){
   //send res from middleware
   //Can forward req to next
   console.log("middleware2 executed")
   next()
}

function middleware3(req,res,next){
   //send res from middleware
    //res.json({message:"This res from middleware1"})
   //Can forward req to next
   console.log("middleware3 executed")
   next()
}

function middleware4(req,res,next){
   //send res from middleware
   //Can forward req to next
   console.log("middleware4 executed")
   next()
}

//use middleware1
app.use(middleware1)
//use middleware2
app.use(middleware2)
//use middleware3
app.use(middleware3)
//use middleware4
app.use(middleware4)

//Forward req to userApp if path starts with /user-api
app.use('/user-api',userApp)

//Forward req to productApp if path starts with /user-api
app.use('/product-api',productApp)

//set a port number
const port = 3000
//assign port number to http server
app.listen(port, () => console.log(`server listening to port ${port}...`))

