import { Router } from "express";
import Player from "../../models/Player";

const addPlayer = Router();

addPlayer.post("/", (req, res) => {
	console.log("--> add new player");
	const { body } = req;
	const newPlayer = new Player(body);
	newPlayer
		.save()
		.then(() => {
			console.log("added new player");
			res.json({ status: 201 });
		})
		.catch((err) => {
			console.log("ERROR in added new player = ", err);
			res.json({ status: 400 });
		});
});

export default addPlayer;
