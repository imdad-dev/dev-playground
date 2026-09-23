import express from "express";

import {
    getLeaderboardController,
    increaseScoreController ,
    getTopPlayersController ,
    getPlayerRankController ,
    getPlayerScoreController ,
    removePlayerController ,

} from "../controller/leaderboard.controller.js";

const router = express.Router();

router.get(
    "/leaderboard",
    getLeaderboardController
);

router.post(
    "/increase-score",
    increaseScoreController
);

router.get("top-players/:n=2" , getTopPlayersController);
router.get("/player-rank/:playerName=Imdadul" , getPlayerRankController);

router.get("/player-score/:playerName" , getPlayerScoreController);

router.delete("/remove-player/:playerName" , removePlayerController);

export default router;