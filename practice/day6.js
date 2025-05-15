const express = require("express");
const app= express();

// app.use((req,res)=>{
//     res.send("Hello from Express");
// })
app.use(express.json());

app.get("/user",(req,res)=>{
    res.send("Hello from user");
})
app.post("/user",(req,res)=>{
    console.log("Data Saved")
    console.log(req.body)
    res.send("Hello from user post");

})



app.listen(1000,()=>{
    console.log("server is running on port 1000");
})