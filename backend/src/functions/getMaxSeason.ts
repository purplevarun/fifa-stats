import { Router } from "express";
import PlayerSeason from "../../models/PlayerSeason";

const getMaxSeason = Router();

getMaxSeason.get("/", (_, res) => {
	let maxSeason = 0;
	PlayerSeason.find({}, (_, docs) => {
		docs.forEach((doc: any) => {
			maxSeason = Math.max(maxSeason, doc.season);
		});
		res.json({ maxSeason });
	});
});

export default getMaxSeason;
