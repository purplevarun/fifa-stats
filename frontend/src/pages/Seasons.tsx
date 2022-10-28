import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Error from "../components/Error";
import PageLayout from "../components/PageLayout";
import PlayerSeasonDetails from "../components/PlayerSeasonDetails";
import Sorter from "../components/Sorter";
import PlayerSeasonType from "../types/PlayerSeasonType";

const Seasons = () => {
	const [data, setData] = useState<null | PlayerSeasonType[]>(null);
	const path = useLocation().pathname.split("/");
	const seasonNumber = path[path.length - 1];
	const [sorter, setSorter] = useState("rating");

	useEffect(() => {
		const fetchData = async () => {
			const url =
				process.env.REACT_APP_API_URL +
				"/get-specific-season/" +
				seasonNumber +
				"/" +
				sorter;
			const response = await axios.get(url);
			setData(response.data);
		};
		fetchData();
	}, [sorter, seasonNumber]);

	if (data) {
		return (
			<PageLayout>
				<br />
				<Sorter data={data} setSorter={setSorter} />
				{data.map((item: PlayerSeasonType) => {
					return <PlayerSeasonDetails player={item} key={item._id} />;
				})}
			</PageLayout>
		);
	} else {
		return <Error type="loading" />;
	}
};
export default Seasons;
