import PlayerSeasonType from "../types/PlayerSeasonType";

const PlayerSeasonLine = ({ player }: { player: PlayerSeasonType }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				borderBottomColor: "black",
				borderBottomWidth: "4px",
				borderBottomStyle: "solid",
				paddingBottom: "20px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
				}}
			>
				<h2>{player.name}</h2>
				<h2>[{player.shirtNumber}]</h2>
				<h2>{player.rating}</h2>
			</div>
			<img
				src={player.photo}
				alt="player"
				height={200}
				style={{ alignSelf: "baseline" }}
			/>
		</div>
	);
};
export default PlayerSeasonLine;
