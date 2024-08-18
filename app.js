const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { adminRouter } = require("./route/admin");
const { shopRouter } = require("./route/shop");

const PORT = 5000;
const app = express();
//body parser by default the request doesnt parse for that we need to bring this 3rd part parser
app.use(bodyParser.urlencoded({ extended: false }));


app.use(adminRouter);

app.use(shopRouter);

//handling 404 invalid route

app.use((request,response, next)=>{
   // response.status(404).send('<h1>Page not found!!!, Try with valid one!!!</h1>')
   response.status(404).sendFile(path.join(__dirname, "views", "404-page-not-found.html"));
})

//Server is listening in a port 5000
app.listen(PORT, ()=>{
    console.log(`Server is up and running in port no ${PORT}`)
})
