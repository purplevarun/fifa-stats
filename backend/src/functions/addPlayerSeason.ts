import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
	const body = req.body;
	console.log(body);
});

export { router as default };
