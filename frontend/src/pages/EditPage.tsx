import NavigationButton from "../components/NavigationButton";
import PageLayout from "../components/PageLayout";

const EditPage = () => {
	return (
		<PageLayout>
			<NavigationButton text="add player" path="/edit/add" />
			<NavigationButton text="update player" path="/edit/update" />
			<NavigationButton text="change status" path="/edit/status" />
		</PageLayout>
	);
};
export default EditPage;
