const express = require("express");
const app = express();
app.use(express.json());
const FoodMenu = [
    {id:1, food:"Chowmein", category:"veg", price:500},
    {id:2, food:"Butter Naan", category:"veg", price:100},
    {id:3, food:"Chicken", category:"non-veg", price:1000},
    {id:4, food:"Mutton", category:"non-veg", price:1500},
    {id:5, food:"Momo", category:"veg", price:300},
    {id:6, food:"Chai", category:"veg", price:50},
    {id:7, food:"Rajma", category:"veg", price:300},
    {id:8, food:"Roti", category:"veg", price:20},
    {id:9, food:"Lolipop", category:"non-veg", price:700},
    {id:10, food:"Kebab", category:"non-veg", price:400},
    {id:11, food:"paneer", category:"veg", price:800},
    {id:12, food:"Egg Curry", category:"non-veg", price:300},
    {id:13, food:"salad", category:"veg", price:100},
    {id:14, food:"shourma", category:"veg", price:300},
    {id:15, food:"Butter Chicken", category:"non-veg", price:900},
    {id:16, food:"Mushroom", category:"veg", price:700},
]

app.get("/food", (req,res)=>{
// Manual Adding Status Code below

    res.status(200).res.send(FoodMenu);

}) 


app.post("/admin", (req,res)=>{ 

    
const tokken = "PAssword";
const Acess = tokken=="PAsscode"?1:0;

if(Acess)
{
    FoodMenu.push(req.body);
    res.send("Item Added SUccessfully")
}
else
{
    res.send("User Have Entered Wrong PAssword");
}
})

app.delete("/admin/:id",(req,res)=>{
    const tokken = "PAsswcode";
    const Acess = tokken=="PAsswcode"?1:0;
    
    if(Acess)
    {
        const id= parseInt(req.params.id);
        const index= FoodMenu.findIndex(item=> item.id===id);
        if(index!=-1)
        {
            res.send("Element Not Exist");
        }
        else
        {
            FoodMenu.splice(index,1);
            res.send("Element Deleted");
        }   
    }
    else
    {
        res.send("You Dont have Permission");
    }


})


















app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})