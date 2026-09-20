import express from "express";
import Redis from "ioredis";


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const publisher = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
const channel = "admin:notification";

app.post("/notify" , async (req, res) => {

    const payload = {
        title : req.body.title || "Default Title",
        message : req.body.message || "Default Message",
        createdAt : new Date().toLocaleString()
    }

    const receiver = await publisher.publish(channel , JSON.stringify(payload));

    res.status(200).json({
        message : "Notification sent successfully",
        payload,
        receiver
    }); 
    
});

app.listen(PORT , ()=>{
    console.log(`Server is running on port at http://localhost:${PORT}`);
})