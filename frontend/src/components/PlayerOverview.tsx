import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerType from "../types/PlayerType";

const PlayerOverview = ({
	name,
	age,
	photo,
	nationality,
	position,
	_id,
}: PlayerType) => {
	const [borderColor, setBorderColor] = useState("black");
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/edit/update/${_id}`);
	};

	return (
		<div
			style={{
				display: "flex",
				width: "90%",
				borderColor,
				borderWidth: "4px",
				borderStyle: "solid",
				padding: "10px",
				cursor: "pointer",
				justifyContent: "space-between",
			}}
			onMouseEnter={() => setBorderColor("green")}
			onMouseLeave={() => setBorderColor("black")}
			onClick={handleClick}
		>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<h1>{name}</h1>
				<h1>{age}</h1>
				<h1>{position}</h1>
			</div>
			<img
				src={`https://countryflagsapi.com/png/${nationality}`}
				alt={`${nationality} flag`}
				width={200}
			/>
			<img src={photo} alt={name} width={200} />
		</div>
	);
};
export default PlayerOverview;
