import { model, Schema } from "mongoose";

const PlayerSeasonSchema = new Schema({
	name: Schema.Types.String,
	photo: Schema.Types.String,
	playerId: Schema.Types.String,
	season: Schema.Types.Number,
	shirtNumber: Schema.Types.Number,
	leagueGame: Schema.Types.Number,
	cupGames: Schema.Types.Number,
	uclGames: Schema.Types.Number,
	leagueGoals: Schema.Types.Number,
	cupGoals: Schema.Types.Number,
	uclGoals: Schema.Types.Number,
	leagueAssists: Schema.Types.Number,
	cupAssists: Schema.Types.Number,
	uclAssists: Schema.Types.Number,
	rating: Schema.Types.Number,
	yellowCards: Schema.Types.Number,
	redCards: Schema.Types.Number,
	hattricks: Schema.Types.Number,
	cleanSheets: Schema.Types.Number,
	totalGames: Schema.Types.Number,
	totalGoals: Schema.Types.Number,
	totalAssists: Schema.Types.Number,
	totalContributions: Schema.Types.Number,
	goalsPerGame: Schema.Types.Number,
	contributionsPerGame: Schema.Types.Number,
	assistsPerGame: Schema.Types.Number,
	cleanSheetsPerGame: Schema.Types.Number,
});

const PlayerSeasonModel = model("PlayerSeason", PlayerSeasonSchema);

export default PlayerSeasonModel;
