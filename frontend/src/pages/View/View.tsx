import Button from "../../components/Button";
import Layout from "../../components/Layout";

const View = () => {
	return (
		<Layout>
			<Button text="player stats" path="/view/players" />
			<Button text="season stats" path="/view/seasons" />
		</Layout>
	);
};
export default View;
