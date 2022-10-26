import { model, Schema } from "mongoose";

const PlayerSeasonSchema = new Schema({
	name: Schema.Types.String,
	age: Schema.Types.Number,
	season: Schema.Types.Number,
	shirtNumber: Schema.Types.Number,
	leagueGame: Schema.Types.Number,
	cupGames: Schema.Types.Number,
	uclGames: Schema.Types.Number,
	totalGames: Schema.Types.Number,
	leagueGoals: Schema.Types.Number,
	cupGoals: Schema.Types.Number,
	uclGoals: Schema.Types.Number,
	totalGoals: Schema.Types.Number,
	leagueAssists: Schema.Types.Number,
	cupAssists: Schema.Types.Number,
	uclAssists: Schema.Types.Number,
	totalAssists: Schema.Types.Number,
	rating: Schema.Types.Number,
	yellowCards: Schema.Types.Number,
	redCards: Schema.Types.Number,
	hattricks: Schema.Types.Number,
	contributions: Schema.Types.Number,
	goalsPerGame: Schema.Types.Number,
	contributionsPerGame: Schema.Types.Number,
	cleanSheets: Schema.Types.Number,
	photo: Schema.Types.String,
});

const PlayerSeasonModel = model("PlayerSeason", PlayerSeasonSchema);

export default PlayerSeasonModel;
