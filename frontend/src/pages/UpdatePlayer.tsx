import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import HorizontalLayout from "../components/HorizontalLayout";
import Input from "../components/Input";
import isComplete from "../lib/isComplete";
import roundoff from "../lib/roundoff";

const UpdatePlayer = () => {
	const {
		state: { name, photo },
		pathname,
	} = useLocation();
	const pathArray = pathname.split("/");
	const playerId = pathArray[pathArray.length - 1];

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
	const [cleanSheets, setCleanSheets] = useState("");

	const i = (val: string) => parseInt(val);

	const getData = () => {
		const data = {
			season: i(season),
			shirtNumber: i(shirtNumber),
			leagueGames: i(leagueGames),
			cupGames: i(cupGames),
			uclGames: i(uclGames),
			leagueGoals: i(leagueGoals),
			cupGoals: i(cupGoals),
			uclGoals: i(uclGoals),
			leagueAssists: i(leagueAssists),
			cupAssists: i(cupAssists),
			uclAssists: i(uclAssists),
			rating: i(rating),
			yellowCards: i(yellowCards),
			redCards: i(redCards),
			hattricks: i(hattricks),
			cleanSheets: i(cleanSheets),
		};

		const totalGames = data.leagueGames + data.cupGames + data.uclGames;

		const totalGoals = data.leagueGoals + data.cupGoals + data.uclGoals;

		const totalAssists =
			data.leagueAssists + data.cupAssists + data.uclAssists;

		const totalContributions = totalGames + totalAssists;

		const goalsPerGame = roundoff(totalGoals, totalGames);
		const assistsPerGame = roundoff(totalAssists, totalGames);
		const contributionsPerGame = roundoff(totalContributions, totalGames);
		const cleanSheetsPerGame = roundoff(i(cleanSheets), totalGames);

		const newData = {
			...data,
			totalGames,
			totalGoals,
			totalAssists,
			totalContributions,
			goalsPerGame,
			assistsPerGame,
			contributionsPerGame,
			cleanSheetsPerGame,
			playerId,
			name,
			photo,
		};

		return newData;
	};
	const [showAlert, setShowAlert] = useState<
		null | "successful" | "unsuccessful"
	>(null);

	const setAlert = (type: "successful" | "unsuccessful") => {
		setShowAlert(type);
		setTimeout(() => {
			setShowAlert(null);
			if (type === "successful") {
				navigate("/edit/update");
			}
		}, 2000);
	};
	const navigate = useNavigate();
	const handleClick = async () => {
		const formData = getData();
		if (isComplete(formData)) {
			const url = process.env.REACT_APP_API_URL + "/add-player-season";
			const response = await axios.post(url, formData);
			setAlert(response.data === 201 ? "successful" : "unsuccessful");
		} else {
			setAlert("unsuccessful");
		}
	};

	return (
		<FormLayout>
			{showAlert && <AlertBox type={showAlert} />}
			<HorizontalLayout>
				<h2>{name}</h2>
				<img
					src={photo}
					alt="player"
					width={200}
					style={{
						marginTop: "20px",
					}}
				/>
				<Button text="submit" size="small" handleClick={handleClick} />
			</HorizontalLayout>
			<HorizontalLayout>
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
					value={cleanSheets}
					setValue={setCleanSheets}
					placeholder="clean sheets"
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
		</FormLayout>
	);
};
export default UpdatePlayer;
