import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Error from "../components/Error";
import PageLayout from "../components/PageLayout";
import PlayerDetails from "../components/PlayerDetails";
import Sorter from "../components/Sorter";
import PlayerType from "../types/PlayerType";

const ViewPlayers = () => {
	const [sortedData, setSortedData] = useState<null | PlayerType[]>(null);
	const path = useLocation().pathname.split("/");
	const initialSorter = path[path.length - 1];

	const [sorter, setSorter] = useState(initialSorter);

	useEffect(() => {
		const fetchData = async () => {
			const url =
				process.env.REACT_APP_API_URL + "/get-players/" + sorter;
			const { data } = await axios.get(url);
			setSortedData(data);
		};
		fetchData();
	}, [sorter]);

	const renderPlayers = (sortedData: PlayerType[]) => {
		return sortedData.map((item: PlayerType) => {
			const playerData = { ...item, key: item._id };
			return <PlayerDetails {...playerData} />;
		});
	};
	if (sortedData) {
		return (
			<PageLayout>
				<Sorter data={sortedData} setSorter={setSorter} />
				<br />
				{renderPlayers(sortedData)}
			</PageLayout>
		);
	} else {
		return <Error type="loading" />;
	}
};
export default ViewPlayers;
