import { useState } from "react";
import FormLayout from "../../components/FormLayout";
import HorizontalLayout from "../../components/HorizontalLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Add = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [season, setSeason] = useState("");
	const [shirtNumber, setShirtNumber] = useState("");
	const [leagueGames, setLeagueGames] = useState("");
	const [cupGames, setCupGames] = useState("");
	const [uclGames, setUclGames] = useState("");
	const [leagueGoals, setLeagueGoals] = useState("");
	const [cupGoals, setCupGoals] = useState("");
	const [uclGoals, setUclGoals] = useState("");
	const [leagueAssists, setLeagueAssists] = useState("");
	const [cupAssists, setCupAssists] = useState("");
	const [uclAssists, setUclAssists] = useState("");
	const [rating, setRating] = useState("");
	const [yellowCards, setYellowCards] = useState("");
	const [redCards, setRedCards] = useState("");
	const [hattricks, setHattricks] = useState("");

	const ROUND_OFF_FACTOR = 100;

	const getRoundedOffValue = (numerator: number, denominator: number) => {
		const ratio = numerator / denominator;
		return Math.round(ratio * ROUND_OFF_FACTOR) / ROUND_OFF_FACTOR;
	};

	const handleClick = () => {
		const totalGames =
			parseInt(leagueGames) + parseInt(cupGames) + parseInt(uclGames);
		const totalGoals =
			parseInt(leagueGoals) + parseInt(cupGoals) + parseInt(uclGoals);
		const totalAssists =
			parseInt(leagueAssists) +
			parseInt(cupAssists) +
			parseInt(uclAssists);
		const goalsPerGame = getRoundedOffValue(totalGoals, totalGames);
		const contributions = totalGoals + totalAssists;
		const contributionsPerGame = getRoundedOffValue(
			contributions,
			totalGames
		);
		const data = {
			name: name,
			age: parseInt(age),
			season: parseInt(season),
			shirtNumber: parseInt(season),
			leagueGames: parseInt(leagueGames),
			cupGames: parseInt(cupGames),
			uclGames: parseInt(uclGames),
			totalGames,
			leagueGoals: parseInt(leagueGoals),
			cupGoals: parseInt(cupGoals),
			uclGoals: parseInt(uclGoals),
			leagueAssists: parseInt(leagueAssists),
			cupAssists: parseInt(cupAssists),
			uclAssists: parseInt(uclAssists),
			totalAssists,
			rating: parseFloat(rating),
			yellowCards: parseInt(yellowCards),
			redCards: parseInt(redCards),
			hattricks: parseInt(hattricks),
			totalGoals,
			contributions,
			goalsPerGame,
			contributionsPerGame,
		};
		console.log(data);
	};

	return (
		<FormLayout>
			<HorizontalLayout>
				<Input
					value={name}
					setValue={setName}
					placeholder="name"
					type="text"
					size="medium"
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Input
					value={age}
					setValue={setAge}
					placeholder="age"
					type="number"
					size="small"
				/>
				<Input
					value={season}
					setValue={setSeason}
					placeholder="season"
					type="number"
					size="small"
				/>
				<Input
					value={shirtNumber}
					setValue={setShirtNumber}
					placeholder="shirt number"
					type="number"
					size="small"
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Input
					value={leagueGames}
					setValue={setLeagueGames}
					placeholder="league games"
					type="number"
					size="small"
				/>
				<Input
					value={cupGames}
					setValue={setCupGames}
					placeholder="cup games"
					type="number"
					size="small"
				/>
				<Input
					value={uclGames}
					setValue={setUclGames}
					placeholder="ucl games"
					type="number"
					size="small"
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Input
					value={leagueGoals}
					setValue={setLeagueGoals}
					placeholder="league goals"
					type="number"
					size="small"
				/>
				<Input
					value={cupGoals}
					setValue={setCupGoals}
					placeholder="cup goals"
					type="number"
					size="small"
				/>
				<Input
					value={uclGoals}
					setValue={setUclGoals}
					placeholder="ucl goals"
					type="number"
					size="small"
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Input
					value={leagueAssists}
					setValue={setLeagueAssists}
					placeholder="league assists"
					type="number"
					size="small"
				/>
				<Input
					value={cupAssists}
					setValue={setCupAssists}
					placeholder="cup assists"
					type="number"
					size="small"
				/>
				<Input
					value={uclAssists}
					setValue={setUclAssists}
					placeholder="ucl assists"
					type="number"
					size="small"
				/>
			</HorizontalLayout>
			<HorizontalLayout>
				<Input
					value={rating}
					setValue={setRating}
					placeholder="rating"
					type="number"
					size="small"
				/>
				<Input
					value={hattricks}
					setValue={setHattricks}
					placeholder="hattricks"
					type="number"
					size="small"
				/>
				<Input
					value={yellowCards}
					setValue={setYellowCards}
					placeholder="yellow cards"
					type="number"
					size="small"
				/>
				<Input
					value={redCards}
					setValue={setRedCards}
					placeholder="red cards"
					type="number"
					size="small"
				/>
			</HorizontalLayout>
			<Button text="submit" handleClick={handleClick} size="small" />
		</FormLayout>
	);
};
export default Add;
