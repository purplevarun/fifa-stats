import { useRef } from "react";
import keyType from "../types/keyType";
import PlayerType from "../types/PlayerType";
import valueType from "../types/valueType";

type Props = {
	data: PlayerType[];
	setSorter: (newSorter: string) => void;
};

const Sorter = ({ data, setSorter }: Props) => {
	const options = {
		rating: "rating",
		"league games": "leagueGames",
		"cup games": "cupGames",
		"ucl games": "uclGames",
		"total games": "totalGames",
		"league goals": "leagueGoals",
		"cup goals": "cupGoals",
		"ucl goals": "uclGoals",
		"total goals": "totalGoals",
		"league assists": "leagueAssists",
		"cup assists": "cupAssists",
		"ucl assists": "uclAssists",
		"total assists": "totalAssists",
		"league contributions": "leagueContributions",
		"cup contributions": "cupContributions",
		"ucl contributions": "uclContributions",
		"total contributions": "totalContributions",
		"goals per game": "goalsPerGame",
		"assists per game": "assistsPerGame",
		"contributions per game": "contributionsPerGame",
		"clean sheets": "cleanSheets",
		"clean sheets per game": "cleanSheetsPerGame",
		hattricks: "hattricks",
		"yellow cards": "yellowCards",
		"red cards": "redCards",
		age: "age",
		status: "status",
	};

	const selectRef = useRef<HTMLSelectElement>(null);

	const handleSelect = () => {
		const newValue = selectRef.current?.value as valueType;
		setSorter(newValue);
	};

	return (
		<div
			style={{
				position: "fixed",
				top: "10px",
				right: "20px",
			}}
		>
			<select
				style={{ padding: "10px", width: "200px" }}
				defaultValue={"rating"}
				onChange={handleSelect}
				ref={selectRef}
			>
				{Object.keys(options).map((option) => {
					const value = options[option as keyType];
					return (
						<option value={value} key={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
};
export default Sorter;
