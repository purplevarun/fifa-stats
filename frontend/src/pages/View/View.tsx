import Button from "../../components/Button";
import Layout from "../../components/Layout";

const View = () => {
	return (
		<Layout>
			<Button text="player stats" path="/view/player" />
			<Button text="season stats" path="/view/season" />
		</Layout>
	);
};
export default View;
