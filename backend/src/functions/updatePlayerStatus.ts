import { Router } from "express";
import Player from "../../models/Player";

const updatePlayerStatus = Router();

updatePlayerStatus.put("/", (req, res) => {
	const playerId = req.body.playerId;
	const newStatus = req.body.newStatus;

	Player.findByIdAndUpdate(
		playerId,
		{ status: newStatus },
		{ useFindAndModify: false },
		(err) => {
			if (err) {
				res.json(400);
			} else {
				res.json(200);
			}
		}
	);
});

export default updatePlayerStatus;
