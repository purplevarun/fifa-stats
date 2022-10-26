import { Router } from "express";

const addPlayer = Router();

addPlayer.post("/", (req, res) => {
	const { body } = req;
	console.log(body);
});

export default addPlayer;
