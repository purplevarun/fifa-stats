import PlayerType from "../types/PlayerType";

const PlayerLine = ({ player }: { player: PlayerType }) => {
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
				<h2>{player.age}</h2>
				<img
					src={`https://countryflagsapi.com/png/${player.nationality}`}
					alt={`${player.nationality} flag`}
					width={200}
					height={100}
				/>
			</div>
			<img
				src={player.photo}
				alt="player"
				width={200}
				style={{
					marginTop: "20px",
				}}
			/>
		</div>
	);
};

export default PlayerLine;
