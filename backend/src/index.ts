import "./db/connection";
import express from "express";
import cors from "cors";
import addPlayerSeason from "./functions/addPlayerSeason";
import addPlayer from "./functions/addPlayer";
import getPlayers from "./functions/getPlayers";

const PORT = process.env.PORT as string;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use("/add", addPlayerSeason);
// app.use("/update", updatePlayerSeason);
app.use("/add-player", addPlayer);
app.use("/get-players", getPlayers);

app.listen(PORT, () => {
	console.log("express server started @", PORT);
});
