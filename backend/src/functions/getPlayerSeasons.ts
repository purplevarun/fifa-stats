import { Router } from "express";
import PlayerSeason from "../../models/PlayerSeason";

const getPlayerSeasons = Router();

getPlayerSeasons.get("/", (_, res) => {
	console.log("--> get player seasons");
	PlayerSeason.find({}, (_, docs) => {
		res.json(docs);
	});
});

export default getPlayerSeasons;
