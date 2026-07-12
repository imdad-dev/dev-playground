const http = require("http");
const { Worker} = require("worker_threads")


const PORT =3000;

const server = http.createServer( (req , res)=>{

    if(req.url ==="/"){
        res.writeHead(200 , { "Content-Type" : "text/plain"});
        res.end("Hello world!");
    }  else if(req.url === "/slowPage"){
         
         const worker = new Worker("./workerThread.js")
          worker.on("message" , ( j) =>{
           res.writeHead(200 , { "Content-Type" : "text/plain"});
        res.end(`Value of j from slow page ${j}`);
      })

    }
});


server.listen(PORT , ()=>{
    console.log(`Server is listening at PORT ${PORT}`);
})