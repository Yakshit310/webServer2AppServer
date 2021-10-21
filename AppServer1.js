const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Application Server 1");
});

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})