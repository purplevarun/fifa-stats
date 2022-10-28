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
	updatePage,
}: PlayerType) => {
	const [borderColor, setBorderColor] = useState("black");
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`${updatePage}/${_id}`, {
			state: { name, photo },
		});
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
				alignItems: "center",
			}}
			onMouseEnter={() => setBorderColor("green")}
			onMouseLeave={() => setBorderColor("black")}
			onClick={handleClick}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "300px",
				}}
			>
				<h1>{name}</h1>
				<h1>{age}</h1>
				<h1>{position}</h1>
			</div>
			<img
				src={`https://countryflagsapi.com/png/${nationality}`}
				alt={`${nationality} flag`}
				width={200}
				height={100}
			/>
			<img src={photo} alt={name} width={200} />
		</div>
	);
};
export default PlayerOverview;
