import { Router } from "express";
import Player from "../../models/Player";

const getPlayers = Router();

getPlayers.get("/", (req, res) => {
	Player.find({}, (err, docs) => {
		if (err) {
			res.json({ status: 500, data: null });
		} else {
			res.json({ status: 200, data: docs });
		}
	});
});

export default getPlayers;
