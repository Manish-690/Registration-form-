const express= require('express')
const bodyparser = require('body-parser')
const path = require('path')
const bodyParser = require('body-parser')
const port = 8000
const users_collection1 = require('./userdatabase/userdata')
require("./userdatabase/mongoose_connection")

const app = express()

app.use(bodyParser.urlencoded(
    {
        extended:true
    }
))

app.use(express.json())

let mainfolder = path.join(__dirname,"../");

app.get('/',(req,res)=>{
    res.send('home page');
    console.log(mainfolder);
})

app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/login.html")
})
app.post("/register",(req,res)=>{
    //console.log(req.body);
    let req_userdata = new users_collection1(req.body);
    req_userdata.save();
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
