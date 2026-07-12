const cluster = require("cluster");
const http = require("http");
const totalCpus = require("os").availableParallelism();

const PORT =3000;

//  console.log(`Total cpu core is : ${totalCpus}`); 12
 

if(cluster.isPrimary){
   
    console.log(`primary ${process.pid} is running🏃‍➡️..`)

    for(let i=0; i<totalCpus ; i++){
        // create worker process 
        cluster.fork();
    }

    cluster.on("exit" , (worker )=>{
    console.log(` Worker ${worker.process.pid} died☠️`);
    cluster.fork()
});


 // graceful shutdown ctl+ c
  process.on("SIGINT", () => {
    console.log("\nPrimary shutting down, killing workers...");
    for (const id in cluster.workers) {
      cluster.workers[id].kill();
    }
    process.exit(0);
  });

}  else {
     let requestCount =0;

   const server = http.createServer( (req , res)=>{
             requestCount++;
          res.writeHead(200 , { "Content-Type" : "application/json"});
          res.end(JSON.stringify({
            pid : process.pid ,
            totalHandleByThisProcess : requestCount ,
          }))

   })

     server.listen(PORT , ()=>{
        console.log(`Worker process : ${process.pid} start on PORT ${PORT}`)
     })
}

 