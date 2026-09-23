import redis from "../config/redis.js";

const LEADERBOARD_KEY = "leaderboard";


// Get complete leaderboard
const getLeaderboard = async () => {
    return await redis.zrevrange(
        LEADERBOARD_KEY,
        0,
        -1,
        "WITHSCORES"
    );
};


// Increase player's score
const increasePlayerScore = async (playerName, scoreIncrement) => {
    return await redis.zincrby(
        LEADERBOARD_KEY,
        scoreIncrement,
        playerName
    );
};


// Get top N players
const getTopNPlayers = async (n) => {
    return await redis.zrevrange(
        LEADERBOARD_KEY,
        0,
        n - 1,
        "WITHSCORES"
    );
};


// Get player's rank
const getPlayerRank = async (playerName) => {
    const rank = await redis.zrevrank(
        LEADERBOARD_KEY,
        playerName
    );

    if (rank === null) {
        return null;
    }

    return rank + 1;
};


// Get player's score
const getPlayerScore = async (playerName) => {
    return await redis.zscore(
        LEADERBOARD_KEY,
        playerName
    );
};


// Remove player
const removePlayerFromLeaderboard = async (playerName) => {
    return await redis.zrem(
        LEADERBOARD_KEY,
        playerName
    );
};


export {
    getLeaderboard,
    increasePlayerScore,
    getTopNPlayers,
    getPlayerRank,
    getPlayerScore,
    removePlayerFromLeaderboard
};