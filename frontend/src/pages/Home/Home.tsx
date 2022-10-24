import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";

const Home = () => {
	return (
		<PageLayout>
			<Button text="view" path="/view" />
			<Button text="edit" path="/edit" />
		</PageLayout>
	);
};
export default Home;
