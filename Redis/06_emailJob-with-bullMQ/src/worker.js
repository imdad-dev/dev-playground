import "dotenv/config";
import { Worker } from 'bullmq';
import { connection } from './queue.js';
import  sendEmail from './email.js';


// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

const emailWorker = new Worker ("emails" , 
          async (job) => {
             console.log(`Processing job ${job.id} of type ${job.name}`);

               await sendEmail(job.data);

          } , 
          {
           connection
          }
)


emailWorker.on("completed" , (job) =>{
      console.log(`Job ${job.id} completed successfully`);
})

emailWorker.on("failed" , (job , err) =>{
    console.error(`Job ${job.id} failed with error: ${err.message}`);
});

console.log("Email worker is running and waiting for jobs...");

