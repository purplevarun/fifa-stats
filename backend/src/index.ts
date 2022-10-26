import "./db/connection";
import express from "express";
import cors from "cors";
import addPlayerSeason from "./functions/addPlayerSeason";

const PORT = process.env.PORT as string;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/add", addPlayerSeason);

app.listen(PORT, () => {
	console.log("express server started @", PORT);
});
