import PlayerSeasonType from "../types/PlayerSeasonType";
import PlayerType from "../types/PlayerType";
import Entity from "./Entity";
import HorizontalLayout from "./HorizontalLayout";

const PlayerData = ({ player }: { player: PlayerSeasonType | PlayerType }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				paddingTop: "20px",
			}}
		>
			<HorizontalLayout>
				<Entity
					name="league games"
					value={player.leagueGames as number}
				/>
				<Entity name="cup games" value={player.cupGames as number} />
				<Entity name="ucl games" value={player.uclGames as number} />
				<Entity
					name="total games"
					value={player.totalGames as number}
				/>
				<Entity
					name="league goals"
					value={player.leagueGoals as number}
				/>
				<Entity name="cup goals" value={player.cupGoals as number} />
				<Entity name="ucl goals" value={player.uclGoals as number} />
				<Entity
					name="total goals"
					value={player.totalGoals as number}
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Entity
					name="league assists"
					value={player.leagueAssists as number}
				/>
				<Entity
					name="cup assists"
					value={player.cupAssists as number}
				/>
				<Entity
					name="ucl assists"
					value={player.uclAssists as number}
				/>
				<Entity
					name="total assists"
					value={player.totalAssists as number}
				/>
				<Entity
					name="league contributions"
					value={player.leagueContributions as number}
				/>
				<Entity
					name="cup contributions"
					value={player.cupContributions as number}
				/>
				<Entity
					name="ucl contributions"
					value={player.uclContributions as number}
				/>
				<Entity
					name="total contributions"
					value={player.totalContributions as number}
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Entity
					name="goals per game"
					value={player.goalsPerGame as number}
				/>
				<Entity
					name="assists per game"
					value={player.assistsPerGame as number}
				/>
				<Entity
					name="contributions per game"
					value={player.contributionsPerGame as number}
				/>
				<Entity name="hattricks" value={player.hattricks as number} />
			</HorizontalLayout>
			<HorizontalLayout>
				<Entity
					name="clean sheets"
					value={player.cleanSheets as number}
				/>
				<Entity
					name="clean sheets per game"
					value={player.cleanSheetsPerGame as number}
				/>
				<Entity
					name="yellow cards"
					value={player.yellowCards as number}
				/>
				<Entity name="red cards" value={player.redCards as number} />
			</HorizontalLayout>
		</div>
	);
};

export default PlayerData;
