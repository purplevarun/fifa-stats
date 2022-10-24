import Button from "../../components/Button";
import Layout from "../../components/Layout";

const Home = () => {
	return (
		<Layout>
			<Button text="view" path="/view" />
			<Button text="edit" path="/edit" />
		</Layout>
	);
};
export default Home;
