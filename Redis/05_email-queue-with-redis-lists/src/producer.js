import express from 'express';
import Redis from 'ioredis';

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

const PORT = process.env.PORT || 3000;

// email queue with redis Lists
const QUEUE_KEY = "queue:email";

app.post("/send-email" , async (req , res) => {


    const { to , subject , message } = req.body;

    const emailJob = {
        to : to ,
        subject : subject || "No subject" ,
        message : message || "No message",
        createdAt : new Date().toLocaleString()
    }
    
    await redis.lpush(QUEUE_KEY , JSON.stringify(emailJob));

    res.json({status : "ok" , message : "Email job added to the queue" , job : emailJob});
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
