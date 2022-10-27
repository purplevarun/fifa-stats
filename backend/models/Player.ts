import { model, Schema } from "mongoose";

const PlayerSchema = new Schema({
	name: Schema.Types.String,
	age: Schema.Types.Number,
	nationality: Schema.Types.String,
	position: Schema.Types.String,
	photo: Schema.Types.String,
	status: Schema.Types.String,
	leagueGames: {
		type: Schema.Types.Number,
		default: 0,
	},
	cupGames: {
		type: Schema.Types.Number,
		default: 0,
	},
	uclGames: {
		type: Schema.Types.Number,
		default: 0,
	},
	totalGames: {
		type: Schema.Types.Number,
		default: 0,
	},
	leagueGoals: {
		type: Schema.Types.Number,
		default: 0,
	},
	cupGoals: {
		type: Schema.Types.Number,
		default: 0,
	},
	uclGoals: {
		type: Schema.Types.Number,
		default: 0,
	},
	totalGoals: {
		type: Schema.Types.Number,
		default: 0,
	},
	leagueAssists: {
		type: Schema.Types.Number,
		default: 0,
	},
	cupAssists: {
		type: Schema.Types.Number,
		default: 0,
	},
	uclAssists: {
		type: Schema.Types.Number,
		default: 0,
	},
	totalAssists: {
		type: Schema.Types.Number,
		default: 0,
	},
	leagueContributions: {
		type: Schema.Types.Number,
		default: 0,
	},
	cupContributions: {
		type: Schema.Types.Number,
		default: 0,
	},
	uclContributions: {
		type: Schema.Types.Number,
		default: 0,
	},
	totalContributions: {
		type: Schema.Types.Number,
		default: 0,
	},
	goalsPerGame: {
		type: Schema.Types.Number,
		default: 0,
	},
	assistsPerGame: {
		type: Schema.Types.Number,
		default: 0,
	},
	contributionsPerGame: {
		type: Schema.Types.Number,
		default: 0,
	},
	cleanSheets: {
		type: Schema.Types.Number,
		default: 0,
	},
	cleanSheetsPerGame: {
		type: Schema.Types.Number,
		default: 0,
	},
	hattricks: {
		type: Schema.Types.Number,
		default: 0,
	},
	seasons: {
		type: Schema.Types.Array,
		default: [],
	},
	shirtNumbers: {
		type: Schema.Types.Array,
		default: [],
	},
});

const Player = model("Player", PlayerSchema);

export default Player;
