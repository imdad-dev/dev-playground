import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();


const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

// Health check for Redis
app.get("/redis-health" , async (req , res) =>{

    const reply = await redis.ping();

    res.json({ redisResponse: reply });
})

// Set and Get value from Redis
app.get("/redis-set" , async (req , res) =>{

      await redis.set("name" , "Imdaddul");
    const name = await redis.get("name");

    res.json({ message : "Value set in Redis" , name : name  });
})


// set with expiry time 

app.get("/redis-set-expiry" , async (req , res) =>{

    await redis.set("otp" , "123456" , "EX" , 10); // set with expiry time of 10 seconds
    const otp = await redis.get("otp"); 

    const ttl = await redis.ttl("otp"); // get the time to live for the key

    res.json({ message : "Value set in Redis with expiry time" , otp : otp , ttl : ttl  });
});


// increment and decrement value in Redis
app.get("/redis-increment" , async (req , res) =>{

    await redis.set("counter" , 0);
    await redis.incr("counter");
    await redis.incr("counter");
    await redis.decr("counter");    

    const counter = await redis.get("counter"); // couunter = 1
    res.json({ message : "Value incremented and decremented in Redis" , counter : counter  });
});


app.get("/mongo" , async (req , res) =>{

    const url =  process.env.MONGO_URL || "mongodb://localhost:27017/my_redis_mongoDB";

    // connect to MongoDB

    if(mongoose.connection.readyState === 0){
        await mongoose.connect(url);
    }

    res.json({ mongoResponse: "MongoDB connected successfully" , databse : mongoose.connection.name });

})

// Home route
app.get("/" , (req , res) => {
    res.json({ message: "Hello from home page" });
});


app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})