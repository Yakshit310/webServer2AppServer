const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/",function(req,res){
    res.send("First Name : " + req.body.firstName + "\nLast Name : " + req.body.lastName );
    console.log("Post response had been by AppServer2");
});

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
})