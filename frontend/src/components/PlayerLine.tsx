import PlayerType from "../types/PlayerType";

const PlayerLine = ({ player }: { player: PlayerType }) => {
	let seasons: string[] = [];
	player.seasons?.forEach((season) => {
		seasons.push(season.toString());
		seasons.push(",");
	});
	seasons = seasons.slice(0, seasons.length - 1);

	let shirtNumbers: string[] = [];
	player.shirtNumbers?.forEach((shirtNumber) => {
		shirtNumbers.push(shirtNumber.toString());
		shirtNumbers.push(",");
	});
	shirtNumbers = shirtNumbers.slice(0, shirtNumbers.length - 1);
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
					gap: "10px",
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
				<br />
				<p>seasons [{seasons}]</p>
				<p>shirt numbers [{shirtNumbers}]</p>
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
