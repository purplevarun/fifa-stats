import { Router } from "express";
import Player from "../../models/Player";

const addPlayer = Router();

addPlayer.post("/", (req, res) => {
	const { body } = req;
	const newPlayer = new Player(body);
	newPlayer
		.save()
		.then(() => {
			res.json({ status: 201 });
		})
		.catch(() => {
			res.json({ status: 400 });
		});
});

export default addPlayer;
