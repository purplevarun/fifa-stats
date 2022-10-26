import { Router } from "express";
import PlayerSeasonModel from "../../models/PlayerSeason";

const router = Router();

router.post("/", (req, res) => {
	const body = req.body;
	const newPlayerSeasonModel = new PlayerSeasonModel({ ...body });
	newPlayerSeasonModel
		.save()
		.then(() => {
			res.json(201);
		})
		.catch(() => {
			res.json(400);
		});
});

export { router as default };
