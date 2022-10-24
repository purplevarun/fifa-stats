import NavigationButton from "../../components/NavigationButton";
import PageLayout from "../../components/PageLayout";

const Home = () => {
	return (
		<PageLayout>
			<NavigationButton text="view" path="/view" />
			<NavigationButton text="edit" path="/edit" />
		</PageLayout>
	);
};
export default Home;
