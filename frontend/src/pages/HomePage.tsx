import NavigationButton from "../components/NavigationButton";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
	return (
		<PageLayout>
			<NavigationButton text="view" path="/view" />
			<NavigationButton text="edit" path="/edit" />
		</PageLayout>
	);
};
export default HomePage;
