import express from "express";
import Redis from "ioredis";

const app = express();

app.use(express.json());

const redis =new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const PORT = process.env.PORT || 3000;


app.post("/user/:id/profile/json" , async (req, res) => {

    await redis.set(`user:${req.params.id}:profile:json`, JSON.stringify(req.body));

     res.json({savedAs : "json"});

});

app.get("/user/:id/profile/json" , async (req, res) => {

    const userProfile = await redis.get(`user:${req.params.id}:profile:json`);
    res.json({profile : userProfile ? JSON.parse(userProfile) : null});
});


// with hash

app.post("/user/:id/profile/hash" , async (req, res) => {

    await redis.hset(`user:${req.params.id}:profile:hash`, req.body);   
    res.json({savedAs : "hash"});
});

app.get("/user/:id/profile/hash" , async (req, res) => {

    const userProfile = await redis.hgetall(`user:${req.params.id}:profile:hash`);
    res.json(userProfile);  
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
