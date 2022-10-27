import { useQuery } from "@tanstack/react-query";
import PageLayout from "../components/PageLayout";

const SelectPlayerToUpdate = () => {
	const { data, isLoading, error } = useQuery(["players"], async () => {
		const url = process.env.REACT_APP_API_URL + "/get-players";
		const response = await fetch(url);
		return response.json();
	});

	return (
		<PageLayout>
			<h1>hello world</h1>
		</PageLayout>
	);
};
export default SelectPlayerToUpdate;
