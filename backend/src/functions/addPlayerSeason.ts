import { Router } from "express";
import Player from "../../models/Player";
import PlayerSeason from "../../models/PlayerSeason";

const router = Router();

const roundoff = (numerator: number, denominator: number) => {
	const ROUND_OFF_FACTOR = 100;
	const ratio = numerator / denominator;
	return Math.round(ratio * ROUND_OFF_FACTOR) / ROUND_OFF_FACTOR;
};

router.post("/", (req, res) => {
	console.log("--> add new player season");
	const body = req.body;
	const newPlayerSeason = new PlayerSeason(body);
	newPlayerSeason
		.save()
		.then(() => {
			Player.findById(body.playerId, (err1: any, docs: any) => {
				if (err1) {
					console.log("ERROR = ", err1);
					res.json(400);
				} else {
					const newData = {
						leagueGames: body.leagueGames + docs.leagueGames,
						cupGames: body.cupGames + docs.cupGames,
						uclGames: body.uclGames + docs.uclGames,
						totalGames: body.totalGames + docs.totalGames,
						leagueGoals: body.leagueGoals + docs.leagueGoals,
						cupGoals: body.cupGoals + docs.cupGoals,
						uclGoals: body.uclGoals + docs.uclGoals,
						totalGoals: body.totalGoals + docs.totalGoals,
						leagueAssists: body.leagueAssists + docs.leagueAssists,
						cupAssists: body.cupAssists + docs.cupAssists,
						uclAssists: body.uclAssists + docs.uclAssists,
						totalAssists: body.totalAssists + docs.totalAssists,
						leagueContributions:
							body.leagueContributions + docs.leagueContributions,
						cupContributions:
							body.cupContributions + docs.cupContributions,
						uclContributions:
							body.uclContributions + docs.uclContributions,
						totalContributions:
							body.totalContributions + docs.totalContributions,
						hattricks: body.hattricks + docs.hattricks,
						cleanSheets: body.cleanSheets + docs.cleanSheets,
						yellowCards: body.yellowCards + docs.yellowCards,
						redCards: body.redCards + docs.redCards,
						seasons: [body.season, ...docs.seasons],
						shirtNumbers: [body.shirtNumber, ...docs.shirtNumbers],
						rating: roundoff(
							body.rating * body.totalGames +
								docs.rating * docs.totalGames,
							body.totalGames + docs.totalGames
						),
					};
					const newGoalsPerGame = roundoff(
						newData.totalGoals,
						newData.totalGames
					);
					const newAssistsPerGame = roundoff(
						newData.totalAssists,
						newData.totalGames
					);
					const newContributionsPerGame = roundoff(
						newData.totalContributions,
						newData.totalGames
					);
					const newCleanSheetsPerGame = roundoff(
						newData.cleanSheets,
						newData.totalGames
					);

					const newNewData = {
						...newData,
						goalsPerGame: newGoalsPerGame,
						assistsPerGame: newAssistsPerGame,
						contributionsPerGame: newContributionsPerGame,
						cleanSheetsPerGame: newCleanSheetsPerGame,
					};

					Player.findByIdAndUpdate(
						body.playerId,
						newNewData,
						{ useFindAndModify: false },
						(err2) => {
							if (err2) {
								console.log("ERROR = ", err2);
								res.json(400);
							} else {
								console.log("added new player season");
								res.json(201);
							}
						}
					);
				}
			});
		})
		.catch(() => {
			res.json(400);
		});
});

export { router as default };
