import NavigationButton from "../../components/NavigationButton";
import PageLayout from "../../components/PageLayout";

const View = () => {
	return (
		<PageLayout>
			<NavigationButton text="player stats" path="/view/players" />
			<NavigationButton text="season stats" path="/view/seasons" />
		</PageLayout>
	);
};
export default View;
