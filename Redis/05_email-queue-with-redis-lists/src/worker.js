import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const QUEUE_KEY = "queue:email";

async function processEmailQueue() {
  
     console.log("Worker is running and waiting for email jobs...");

     while(true){

        const rawJob = await redis.brpop(QUEUE_KEY , 0); // blocking pop

        const job = JSON.parse(rawJob[1]);
        
        console.log(`Processing email job: 
            To: ${job.to},
             Subject: ${job.subject},
              Message: ${job.message}}
             Created At: ${job.createdAt}`
            );


          // Here you can implement the actual email sending logic using a library like nodemailer or any other email service.
          // now only simulating using setTimeout (promise based) 

          await new Promise(resolve =>
              setTimeout(() => {
                  console.log(`Email sent to ${job.to} successfully!`);
                  resolve();
              }
                , 2000) 
            );
     }
}

processEmailQueue().catch(err => {
    console.error("Error in worker:", err);
    process.exit(1);
});

