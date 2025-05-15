const express= require("express");
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

app.use(express.json());


app.get("/book",(req,res)=>{

    const book= BookStore.filter(info=>info.author===req.query.author)
    res.send(book);
})

app.get("/book/:id",(req,res)=>{            
    const id = parseInt(req.params.id);

    const book = BookStore.find(info => info.id===id);                                      
    res.send(book)
})

app.post("/book",(req,res)=>{

    BookStore.push(req.body);
    res.send("Data Saved Succesfully");
})
app.patch("/book",(req,res)=>{
      res.send("PAtch Updated");
      const book=BookStore.find(info=>info.id===req.body.id)
      if(req.body.author)
        book.author=req.body.author
      if(req.body.name)
      book.name=req.body.name;
})

app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const index = BookStore.findIndex(info => info.id===id)
    BookStore.splice(index,1);
    res.send("Data Deleted Succesfully");  
})
app.listen(1220,()=>{
    console.log("Server is running on port 1200")
})

