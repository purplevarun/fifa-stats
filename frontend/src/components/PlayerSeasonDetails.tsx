import PlayerSeasonType from "../types/PlayerSeasonType";
import PlayerData from "./PlayerData";
import PlayerDetailsLayout from "./PlayerDetailsLayout";
import PlayerSeasonLine from "./PlayerSeasonLine";

const PlayerSeasonDetails = ({ player }: { player: PlayerSeasonType }) => {
	return (
		<PlayerDetailsLayout>
			<PlayerSeasonLine player={player} />
			<PlayerData player={player} />
		</PlayerDetailsLayout>
	);
};
export default PlayerSeasonDetails;
