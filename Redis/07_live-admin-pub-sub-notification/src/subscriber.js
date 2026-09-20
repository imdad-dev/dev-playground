import Redis from 'ioredis';


const subscriber = new Redis(process.env.REDIS_URL || 'redis://localhost:6379' );


// Subscribe to the channel named "notification" and listen for messages published to that channel

const channel = "admin:notification";
subscriber.subscribe(channel , (err) => {  

      if(err){
        console.error("Failed to subscribe: %s", err.message);
      }

      console.log("Subscribed successfully! This client is currently subscribed to the following channels: ",channel);
});


subscriber.on("message", (channel, message) => {

     console.log("Received Message " , channel, JSON.parse(message));
});


export default subscriber;