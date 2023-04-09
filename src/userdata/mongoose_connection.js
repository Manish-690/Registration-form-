/*const mongoose = require('mongoose')
const users_collection1 = require('./userdata')

mongoose.connect('mongodb://loacalhost:27017/test')
.then(()=>{console.log('mongoose connected successfully')})
.catch((err)=>{console.log(err)}) */


const mongoose = require('mongoose')
const users_collection1 = require('./userdata')
mongoose.connect('mongodb://127.0.0.1:27017/local', {});
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})