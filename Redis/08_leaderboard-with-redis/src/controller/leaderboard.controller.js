import {
    getLeaderboard,
    increasePlayerScore,
    getTopNPlayers,
    getPlayerRank,
    getPlayerScore,
    removePlayerFromLeaderboard
} from "../service/leaderboard.js";


export const getLeaderboardController = async (req, res) => {

    try {

        const leaderboard = await getLeaderboard();

        res.status(200).json({
            status: "success",
            leaderboard
        });

    } catch (error) {

        console.error("Leaderboard fetch error:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to fetch leaderboard"
        });
    }
};


export const increaseScoreController = async (req, res) => {

    try {

        const { playerName, scoreIncrement } = req.body;

        const newScore = await increasePlayerScore(
            playerName,
            scoreIncrement
        );

        res.status(200).json({
            status: "success",
            message: "Score increased successfully",
            player: playerName,
            score: newScore
        });

    } catch (error) {

        console.error("Increase score error:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to increase score"
        });
    }
};



export const getTopPlayersController = async (req, res) => {

    try {

        const n = Number(req.query.n);

        if (!Number.isInteger(n) || n <= 0) {
            return res.status(400).json({
                status: "error",
                message: "n must be a positive integer"
            });
        }

        const players = await getTopNPlayers(n);

        res.status(200).json({
            status: "success",
            players
        });

    } catch (error) {

        console.error("Top players error:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to fetch top players"
        });
    }
};



export const getPlayerRankController = async (req, res) => {

    try {

        const { playerName } = req.query;

        if (!playerName) {
            return res.status(400).json({
                status: "error",
                message: "playerName is required"
            });
        }

        const rank = await getPlayerRank(playerName);

        if (rank === null) {
            return res.status(404).json({
                status: "error",
                message: "Player not found"
            });
        }

        res.status(200).json({
            status: "success",
            player: playerName,
            rank
        });

    } catch (error) {

        console.error("Rank error:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to get player rank"
        });
    }
};



export const getPlayerScoreController = async (req, res) => {

    try {

        const { playerName } = req.query;

        if (!playerName) {
            return res.status(400).json({
                status: "error",
                message: "playerName is required"
            });
        }

        const score = await getPlayerScore(playerName);

        if (score === null) {
            return res.status(404).json({
                status: "error",
                message: "Player not found"
            });
        }

        res.status(200).json({
            status: "success",
            player: playerName,
            score: Number(score)
        });

    } catch (error) {

        console.error("Score error:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to get player score"
        });
    }
};




export const removePlayerController = async (req, res) => {

    try {

        const { playerName } = req.body;

        if (!playerName) {
            return res.status(400).json({
                status: "error",
                message: "playerName is required"
            });
        }

        const removed = await removePlayerFromLeaderboard(playerName);

        if (removed === 0) {
            return res.status(404).json({
                status: "error",
                message: "Player not found"
            });
        }

        res.status(200).json({
            status: "success",
            message: `${playerName} removed from leaderboard`
        });

    } catch (error) {

        console.error("Remove player error:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to remove player"
        });
    }
};