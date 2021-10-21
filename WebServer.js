const express = require('express');
const app = express();
const axios = require('axios');

app.get("/",(req,res)=>{

    axios.get("http://localhost:3001/").then(response=>{
        res.send(response.data);
        console.log("Got Response from Application Server 1");
    })
    .catch(error=>{
        console.log(error);
    });
})


app.post("/",(req,res)=>{
    axios.post("http://localhost:3002/",{
        firstName : req.query.firstName,
        lastName : req.query.lastName
    })
    .then(response=>{
        res.send(response.data);
        console.log("Got Response from Application Server 2");
    })
    .catch(error=>{
        console.log(error);
    })
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})