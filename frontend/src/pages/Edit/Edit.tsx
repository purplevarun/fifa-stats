import NavigationButton from "../../components/NavigationButton";
import PageLayout from "../../components/PageLayout";

const Edit = () => {
	return (
		<PageLayout>
			<NavigationButton text="add player" path="/edit/add" />
			<NavigationButton text="update player" path="/edit/update" />
			<NavigationButton text="change status" path="/edit/status" />
		</PageLayout>
	);
};
export default Edit;
