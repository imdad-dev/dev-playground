import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Redis from "ioredis";

const app = express();

app.use(express.json());

const redis =new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const PORT = process.env.PORT || 3000;
 
const MAX_ATTEMPTS = 5; // maximum number of attempts allowed
const PHONE_KEY = "save:phones"; // key to store phone numbers in Redis

const apiKey = process.env.TWO_FACTOR_API_KEY; // your two-factor authentication API key

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function OTPKey(phone){
    return `otp:${phone}`;
}

function attemptsKey(phone){
    return `otp:attempts:${phone}`;
}
 
async function sendOTP(phone, otp) {
  const url = `https://2factor.in/API/V1/${apiKey}/SMS/${phone}/${otp}`;

  try{
    const response = await fetch(url);
    const data = await response.json();

    console.log("2factor response:", data);
    } catch (error) {   
    console.error("Error sending OTP:", error); 

  }
}

// request OTP
app.post("/otp/req" , async(req , res)=>{

    const {phone} = req.body;
    const otp = generateOTP();

    // store phone to use during check ttl 
    // first store main DB like MongoDB 
    await redis.set(PHONE_KEY , phone , "EX" , 600); // 10 minutes TTL

    // set attempts key with 0 
    await redis.set(attemptsKey(phone) , 0 , "EX" , 5*60); // 5 minutes TTL
    
    await redis.set(OTPKey(phone) , otp , "EX" , 60);  // 40 seconds TTL
    
    await sendOTP(phone , otp);
    res.json({ message : "OTP sent successfully" , otp});
});


//verify otp
app.get("/verify-otp" , async(req , res) =>{

    const {phone , otp} = req.body;

    const saveOTP = await redis.get(OTPKey(phone));

     // check if attempts exceeded
    const attempts = await redis.get(attemptsKey(phone));
    if(attempts >= MAX_ATTEMPTS){
        return res.status(400).json({ message : "Maximum attempts exceeded. Please request a new OTP."});
    }
     else {
        // increment attempts
        await redis.incr(attemptsKey(phone));
     }

    if(!saveOTP){
        return res
        .status(400)
        .json( { message : "OTP expired or not found"});
    };


    if(saveOTP !==otp){
        return res.status(400).json({message : "Invalid OTP"});
    }

    // OTP is valid, delete it from Redis
    await redis.del(OTPKey(phone));

     res.json({message : "OTP verified successfully" ,  remainingAttempts : MAX_ATTEMPTS - attempts});
})


// check ttl 

app.get("/otp/ttl" , async(req , res) =>{

    // const {phone} = req.params;  // good practice to get phone from params but here we are storing phone in redis for demo purpose

      const phone = await redis.get(PHONE_KEY);
       
      if(!phone){
        return res.status(400).json({ message : "Phone number not found. Please request a new OTP."});
      }

    const ttl = await redis.ttl(OTPKey(phone));

    res.json({ message :"OTP TTL" , ttl});
})


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
});