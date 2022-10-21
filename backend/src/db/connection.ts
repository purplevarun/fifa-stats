import mongoose from "mongoose";
import { config } from "dotenv";

config();

const mongodbURL = process.env.MONGO_URL as string;
const mongodbStatus = mongoose.connection.readyState;
const mongodbConfig = { useNewUrlParser: true, useUnifiedTopology: true };
const isDisconnected = mongodbStatus === 0;

if (isDisconnected) {
	mongoose.connect(mongodbURL, mongodbConfig, () => {
		console.log("connected to mongoDB");
	});
} else {
	console.info("already connected to mongoDB");
}
