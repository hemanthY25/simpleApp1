const http = require('http');
const port = 3030;
const requesthandler = (request, response) => {
    console.log(request.url);
    response.end('Hello nodeJS server!');
};

const server = http.createServer(requesthandler);
server.listen( port, (err) => {
    if (err) { return console.log('somthing bad happened'); }
    console.log(`server listening on ${port}`);
});