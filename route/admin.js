const express = require("express");
const path = require("path");
const adminRouter = express.Router();

//add-products middleware
adminRouter.get("/add-product", (request, response) => {    
    //response.send("<form action='/product' method='POST'><input type='text' name='title' placeholder='enter the text' /> <button type='submit'>Add product </button></form></body></html><h1>Add products</h1>")
    response.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});


//all products middleware
adminRouter.post("/product", (request, response) => {    
    console.log(request.body);
    response.redirect("/")    
})

module.exports = {
    adminRouter
}