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
	const [appearances, setAppearances] = useState("");
	const [leagueGoals, setLeagueGoals] = useState("");
	const [cupGoals, setCupGoals] = useState("");
	const [uclGoals, setUclGoals] = useState("");
	const [assists, setAssists] = useState("");
	const [rating, setRating] = useState("");
	const [yellowCards, setYellowCards] = useState("");
	const [redCards, setRedCards] = useState("");
	const [hattricks, setHattricks] = useState("");

	const handleClick = () => {};

	return (
		<FormLayout>
			<Input
				value={name}
				setValue={setName}
				placeholder="name"
				type="text"
				size="medium"
			/>
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
			<Input
				value={appearances}
				setValue={setAppearances}
				placeholder="appearances"
				type="number"
				size="small"
			/>
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
					value={assists}
					setValue={setAssists}
					placeholder="assists"
					type="number"
					size="small"
				/>
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
			</HorizontalLayout>
			<HorizontalLayout>
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
