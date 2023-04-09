const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const users_schema1 =new mongoose.Schema({

  /*  firstnameId:{
        type:String,
        required:true,
        lowercase:true
    },
    lastname:{
        type:String,
        lowercase:true
    },
    useremail:{
        type:String,
        required:true,
        unique:true
    },
   
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    userpassword:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true

    }*/
    userfirstname:{
        type:String,
        required:true,
        lowercase:true  
    },
    userlastname:{
        type:String,
        lowercase:true
    },
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    usermobilenumber:{
        type:Number,
        required:true,
        unique:true
    },
    userpassword5:{
        type:String,
        required:true
    }
})

const users_collection1 =new mongoose.model('users_collection' ,users_schema1);
module.exports =users_collection1;