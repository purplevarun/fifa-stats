import { Router } from "express";
import PlayerSeason from "../../models/PlayerSeason";

const getSpecificSeason = Router();

getSpecificSeason.get("/:seasonNumber/:sorter", (req, res) => {
	const sorter = {};
	// @ts-ignore:next-line
	sorter[req.params.sorter] = "desc";
	PlayerSeason.find({ season: req.params.seasonNumber })
		.sort(sorter)
		// @ts-ignore:next-line
		.exec((_, docs) => {
			res.json(docs);
		});
});

export default getSpecificSeason;
