import express from "express";
import Redis from "ioredis";

const app = express();

app.use(express.json()); // middleware to parse JSON request bodies

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const PORT = process.env.PORT || 3000;
const BANNER_KEY = "app:banner"; // Redis key for the site banner

// post endpoint to set the site banner

app.post("/banner" , async (req , res) =>{

      await redis.set(BANNER_KEY , req.body.message || "Welcome to our redis site banner API");
     res.json({ message : "Banner key set successfully" , banner : req.body.message  });

});


app.get("/banner" , async (req , res) =>{

    const banner = await redis.get(BANNER_KEY);
    res.json({ message : "Banner key fetched successfully" , banner : banner  });

});


app.delete("/banner" , async (req , res) =>{

    await redis.del(BANNER_KEY);
    res.json({ message : "Banner key deleted successfully"  }); 
});


// key exists check
app.get("/banner-exists" , async (req , res) =>{

    const exists = await redis.exists(BANNER_KEY);
    res.json({ message : "Banner key exists check" , exists : Boolean(exists)  });
});


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});