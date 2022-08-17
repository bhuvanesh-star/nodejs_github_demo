const http = require ('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end("THIS IS THE HOME PAGE")
    }
    if (req.url === '/about'){
        res.end("THIS IS THE ABOUT PAGE")
    }
})

server.listen(5000);
