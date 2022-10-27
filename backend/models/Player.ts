import { model, Schema } from "mongoose";

const PlayerSchema = new Schema({
	name: Schema.Types.String,
	age: Schema.Types.Number,
	nationality: Schema.Types.String,
	position: Schema.Types.String,
	photo: Schema.Types.String,
});

const Player = model("Player", PlayerSchema);

export default Player;
