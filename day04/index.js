const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url==='/')
    {
        res.end('Welcome to our home page');
    }
    else if(req.url==='/about')
    {
        res.end('Welcome to our about page');
    }
    else
    {
        res.end("404 not found here ");
    }

});

server.listen(5000,()=>{
    console.log("Server is running on port 5000");
})