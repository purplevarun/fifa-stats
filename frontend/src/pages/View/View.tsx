import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";

const View = () => {
	return (
		<PageLayout>
			<Button text="player stats" path="/view/players" />
			<Button text="season stats" path="/view/seasons" />
		</PageLayout>
	);
};
export default View;
