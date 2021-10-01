const http = require("http");

const server = http.createServer((req,res)=>{
res.setHeader("Content-Type","application/json");
res.setHeader("Access-Control-Allow-Origin","*");
res.writeHead(200); //status OK


let dataObj = {id:123,name:"shakerdl",email:"shaker@gmail.com"};

let data = JSON.stringify(dataObj);

res.end(data);
});

server.listen(3000,()=>{
    console.log("the port is listening 3000");
});