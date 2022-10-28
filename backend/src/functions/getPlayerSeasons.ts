import { Router } from "express";
import PlayerSeason from "../../models/PlayerSeason";

const getPlayerSeasons = Router();

getPlayerSeasons.get("/", (_, res) => {
	PlayerSeason.find({}, (_, docs) => {
		res.json(docs);
	});
});

export default getPlayerSeasons;
