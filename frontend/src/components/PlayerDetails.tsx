import PlayerType from "../types/PlayerType";
import PlayerLine from "./../components/PlayerLine";
import Entity from "./Entity";
import HorizontalLayout from "./HorizontalLayout";
import PlayerDetailsLayout from "./PlayerDetailsLayout";

const PlayerDetails = (player: PlayerType) => {
	return (
		<PlayerDetailsLayout>
			<PlayerLine player={player} />
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
					<Entity
						name="cup games"
						value={player.cupGames as number}
					/>
					<Entity
						name="ucl games"
						value={player.uclGames as number}
					/>
					<Entity
						name="total games"
						value={player.totalGames as number}
					/>
				</HorizontalLayout>
			</div>
		</PlayerDetailsLayout>
	);
};
export default PlayerDetails;
