const express= require('express');

const app= express();

// app.use((req,res)=>{
//     res.send("Hello Worl aksisga d sfjdff j")
    
// })
// Routing in Express 

// error occur when only we use "/" in path of routing to handle this casewe have to use write only slash caseat last 
// ? path me "log?in is ka maatlab jab local host me /login likhoge toh login page open hoga and jab /loin likhoge toh bhi login page open hoga ans "
// + ka use karega tab "Hellllllllllo" plus ka phele ka multiple time likh sakta hai  likhne par bhi hello page open hoga
// * ka use tab hota hai path me start ke badd kuch bhi dal sakta hai like "hel*lo" now we can acess hello page using hel511510dnjd=jddlo anything written here
// : colon ka use below likha hai in contact page 

app.use("/Hel+lo",(req,res)=>{
    
    res.send("I Am home PAge ")


})
// colon ka use matlab link me se value fatch karna hot hai 

app.use("/contact/:num/:user",(req,res)=>{
    
    console.log(req.params);
    res.send("I Am Contact PAge ")

})
app.use("/login",(req,res)=>{
    
    res.send("I Am Login PAge ")

})
app.use("/",(req,res)=>{
    
    res.send("I Am Drfault PAge")

})
app.listen(5001,()=>{
    console.log("Server IS liStening You....!")
})