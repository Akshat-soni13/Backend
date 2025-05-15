const express= require("express");
const app = express();
const main= require("./databse");
const users= require("./users");

app.use(express.json());


app.get("/info",async(req,res)=>{

        const ans= await users.find({});
        res.send(ans);
})

app.post("/info",async (req,res)=>{

    try{
    await users.create(req.body);
    res.send("user created");
    }catch(err)
    {
        res.status(500).send(arr);
    }
})

app.delete("/info",async (req,res)=>{
    try{
        await users.deleteOne({name:"Rohit"});
        res.send("user deleted");
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

app.put("/info", async (req,res)=>{
   
        try
        {
    const result = await users.updateOne({ name: 'AKshat' }, { age: 40, city:"Bangladesh"});
    res.send("Updated Succesfully");
        }catch(err)
        {
            res.status(500).send("User not updated")
        }
})

main()
.then(async()=>{
    console.log("Connected To Databse");
    app.listen(2000,()=>{
    console.log("server is running on port 2000");
})
})
.catch((err)=>console.log(err))