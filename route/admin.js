const express = require("express");
const adminRouter = express.Router();

//add-products middleware
adminRouter.get("/add-products", (request, response) => {    
    response.send("<form action='/product' method='POST'><input type='text' name='title' placeholder='enter the text' /> <button type='submit'>Add product </button></form></body></html><h1>Add products</h1>")
})


//all products middleware
adminRouter.post("/product", (request, response) => {    
    console.log(request.body);
    response.redirect("/")    
})

module.exports = {
    adminRouter
}