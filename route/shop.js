const express = require("express");
const path = require("path");
const shopRouter = express.Router();

//common middleware
shopRouter.get("/", (request, response, next) => {
    console.log("1st Express middleware!!!")
    //response.send("<h1>Hey there!!! Response from Express!!!</h1>");
    response.sendFile(path.join(__dirname,"../", "views" ,"shop.html"));
    //next method helps to call the next middlware
})

module.exports = {
    shopRouter
}