const express = require("express");

const app = express();

const BookStore=[
    {id:1,name:"Harry Potter",author:"J.K. Rowling"},
    {id:2,name:"The Lord of the Rings",author:"J.R.R. Tolki"},
    {id:3,name:"The Hunger Games",author:"Suzanne Collins"},
    {id:4,name:"The Alchemist",author:"Paulo Coelho"},
    {id:5,name:"The Catcher in the Rye",author:"J.D"},
    {id:6,name:"The Great Gatsby",author:"F. Scott Fitzgerald"},
    {id:7,name:"1984",author:"George Orwell"},
    {id:8,name:"The Picture of Dorian Gray",author:"Oscar Wilde"},
    {id:9,name:"The Count of Monte Cristo",author:"Alexandre Dumas"},
    {id:10,name:"The Adventures of Huckleberry Finn",author:"Mark Twain"}
]

// Undefine Error Aaye Toh below line Linkhni hai
app.use(express.json())
app.patch("/Book",(req,res)=>{
    console.log(req.body);
    // const id=parseInt(req.body.id);
    const Book= BookStore.find((info)=>info.id===req.body.id);
    if(req.body.author){
    Book.author=req.body.author;
    res.send("Patch Updated");}
    else if(req.body.name){
    Book.name=req.body.name;
        res.send("Patch Updated");
    }
    else
    {
        res.send("Invalid Request");
    }
    
})
app.put("/Book",(req,res)=>{

    const Book= BookStore.find((info)=>info.id===req.body.id);
    Book.author=req.body.author;
    Book.name=req.body.name;
        res.send("Updated");


}
)

app.get("/Book",(req,res)=>{
    res.send(BookStore);

})

// Trying To Delete Element 
app.delete("/Book/:id",(req,res)=>{
    
    const id= parseInt(req.params.id);
    // console.log("id=",id);  
    // jo Book delete Karni hai Uski index nikal di 
    const Idx= BookStore.findIndex((info)=>info.id===id)
    // console.log(Idx);
    if(Idx>=0)
    {
        BookStore.splice(Idx,1);
        res.send("Deleted");
    }
    else
    {
        res.send("Invalid Request");
    }
})

app.listen(3000,()=>{
    console.log("Aki's Server is listeing you");
})  

