const express = require("express");

const shopRouter = express.Router();

//common middleware
shopRouter.get("/",(request,response,next)=>{
    console.log("1st Express middleware!!!")
    response.send("<h1>Hey there!!! Response from Express!!!</h1>");
    //next method helps to call the next middlware
})

module.exports = {
    shopRouter
}