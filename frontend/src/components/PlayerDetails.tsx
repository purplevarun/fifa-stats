import PlayerType from "../types/PlayerType";
import PlayerLine from "./../components/PlayerLine";
import PlayerData from "./PlayerData";
import PlayerDetailsLayout from "./PlayerDetailsLayout";

const PlayerDetails = (player: PlayerType) => {
	return (
		<PlayerDetailsLayout>
			<PlayerLine player={player} />
			<PlayerData player={player} />
		</PlayerDetailsLayout>
	);
};
export default PlayerDetails;
