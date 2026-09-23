import express from "express";
import leaderboardRoute from "./routes/routes.js";

const app = express();

app.use(express.json());


app.use("/api" , leaderboardRoute);



export default app;