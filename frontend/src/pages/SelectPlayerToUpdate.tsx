import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Error from "../components/Error";
import PageLayout from "../components/PageLayout";
import PlayerOverview from "../components/PlayerOverview";
import PlayerType from "../types/PlayerType";

const SelectPlayerToUpdate = () => {
	const { data, isLoading, error } = useQuery(["players"], async () => {
		const url = process.env.REACT_APP_API_URL + "/get-players/rating";
		const response = await fetch(url);
		return response.json();
	});

	const updatePage = useLocation().pathname;

	if (isLoading) {
		return <Error type="loading" />;
	} else if (error) {
		return <Error type="error" />;
	} else {
		return (
			<PageLayout>
				{data.map((item: PlayerType) => {
					const data = { ...item, key: item._id, updatePage };
					return <PlayerOverview {...data} />;
				})}
			</PageLayout>
		);
	}
};
export default SelectPlayerToUpdate;
