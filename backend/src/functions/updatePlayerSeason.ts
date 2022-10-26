import { Router } from "express";
import PlayerSeasonModel from "../../models/PlayerSeason";

const router = Router();

router.post("/", (req, res) => {
	const name = req.body.name;
});

export { router as default };
