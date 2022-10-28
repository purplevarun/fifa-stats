import "./db/connection";
import express from "express";
import cors from "cors";
import addPlayerSeason from "./functions/addPlayerSeason";
import addPlayer from "./functions/addPlayer";
import getPlayers from "./functions/getPlayers";
import updatePlayerStatus from "./functions/updatePlayerStatus";
import getPlayerSeasons from "./functions/getPlayerSeasons";
import getMaxSeason from "./functions/getMaxSeason";

const PORT = process.env.PORT as string;
const app = express();
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/add-player", addPlayer);
app.use("/get-players", getPlayers);
app.use("/get-player-seasons", getPlayerSeasons);
app.use("/get-max-season", getMaxSeason);
app.use("/add-player-season", addPlayerSeason);
app.use("/update-player-status", updatePlayerStatus);

app.listen(PORT, () => {
	console.log("express server started @", PORT);
});
