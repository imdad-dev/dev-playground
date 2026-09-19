import express from 'express';
import Redis from 'ioredis';
import { emailQueue } from './queue.js';

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

const PORT = process.env.PORT || 3000;


app.post("/send-email" , async (req , res) => {


   try {

       const { to , subject , message } = req.body;

    if( !to || !subject || !message){
         
        return  res
                 .status(400)
                 .json({
                     success : false ,
                    message : "Missing required fields: to, subject, and message are required.",
                  })
           
    }
    

    const emailJob = await emailQueue.add("send-email" , {
        to, 
        subject,
        message,
        createdAt : new Date().toLocaleString()
    } , 
{
    attempts : 3 ,
    backoff : {
        type : "exponential" , 
        delay : 5000
    }
})

    res
    .status(200)
    .json({
        success : true ,
        message : "Email job added to the queue",
        job : emailJob ,
        jobId : emailJob.id , 
    })
    
   } catch (error) {
    console.error("Error adding email job to the queue:", error);
    res.status(500).json({ status: "error", message: "Failed to add email job to the queue" });
   }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
