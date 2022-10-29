import { Router } from "express";
import Player from "../../models/Player";

const getPlayers = Router();

getPlayers.get("/:sortKey", (req, res) => {
	console.log("--> get players");
	const sorter = {};
	// @ts-ignore:next-line
	sorter[req.params.sortKey] = "desc";
	Player.find({})
		.sort(sorter)
		// @ts-ignore:next-line
		.exec((_, docs) => {
			res.json(docs);
		});
});

export default getPlayers;
