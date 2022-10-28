import { useQuery } from "@tanstack/react-query";
import Error from "../components/Error";
import PageLayout from "../components/PageLayout";
import PlayerDetails from "../components/PlayerDetails";
import PlayerType from "../types/PlayerType";

const ViewPlayers = () => {
	const { data, isLoading, error } = useQuery(["players"], async () => {
		const url = process.env.REACT_APP_API_URL + "/get-players";
		const response = await fetch(url);
		return response.json();
	});
	const sortedData = data;
	if (isLoading) {
		return <Error type="loading" />;
	} else if (error) {
		return <Error type="error" />;
	} else {
		return (
			<PageLayout>
				<br />
				<br />
				{sortedData.map((item: PlayerType) => {
					const playerData = { ...item, key: item._id };
					return <PlayerDetails {...playerData} />;
				})}
			</PageLayout>
		);
	}
};
export default ViewPlayers;
