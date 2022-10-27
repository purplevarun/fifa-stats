import { useQuery } from "@tanstack/react-query";
import Error from "../components/Error";
import PageLayout from "../components/PageLayout";
import PlayerOverview from "../components/PlayerOverview";
import PlayerType from "../types/PlayerType";

const SelectPlayerToUpdate = () => {
	const { data, isLoading, error } = useQuery(["players"], async () => {
		const url = process.env.REACT_APP_API_URL + "/get-players";
		const response = await fetch(url);
		return response.json();
	});

	if (isLoading) {
		return <Error type="loading" />;
	} else if (error) {
		return <Error type="error" />;
	} else {
		return (
			<PageLayout>
				{data.map((item: PlayerType) => {
					return <PlayerOverview {...item} key={item._id} />;
				})}
			</PageLayout>
		);
	}
};
export default SelectPlayerToUpdate;
