import { Router } from "express";
import Player from "../../models/Player";

const getPlayers = Router();

getPlayers.get("/", (_, res) => {
	Player.find({}, (_, docs) => {
		res.json(docs);
	});
});

export default getPlayers;
