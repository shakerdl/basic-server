const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder; // why he did put the StingDecoder twice
const util = require("util");
const formidable = require("formidable"); 

const server = http.createServer((req,res)=>{
let path = url.parse( req.url,true);

if (req.method.toLowerCase() = 'post') {
 let form = new formidable.IncomingForm();
 form.parse(req,(err,fields,files)=>{
if (err){
    console.error(err.message);
    return;
}
    res.writeHead(200,"OK",{"Content-Type":"text/plain"});
    res.write('the POST output Response\n\n');
    res.end(util.inspect({fields:fields,files:files}));

 })
}else if (req.method.toLowerCase() = 'get') {
    res.writeHead(200,"OK",{"Content-Type":"text/plain"});
    res.write("the response\n\n");
    res.write(util.inspect(path.query)+"\n\n");
    res.end("End of the message")
}
else {
    // deal with other method
}
// let decoder = new StringDecoder('utf-8');
// let buffer = '';
// req.on('data',(chunk)=>{
// buffer += decoder.write(chunk);
// });

// req.on('end',()=>{
//     buffer += decoder.end();
//     res.writeHead(200,"OK",{"Content-Type":"text/plain"});
//     res.write("the response\n\n");
//     res.write(util.inspect(path.query)+"\n\n");
//     res.write(buffer + "\n\n")
//     res.end("End of the message")
// });
});

server.listen(3000,()=>{
    console.log("the port is listening 3000");
});