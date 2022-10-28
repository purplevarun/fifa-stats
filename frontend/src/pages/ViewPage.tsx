import NavigationButton from "../components/NavigationButton";
import PageLayout from "../components/PageLayout";

const ViewPage = () => {
	return (
		<PageLayout>
			<NavigationButton text="player stats" path="/view/players" />
			<NavigationButton text="season stats" path="/view/seasons" />
		</PageLayout>
	);
};
export default ViewPage;
