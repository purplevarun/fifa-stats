import NavigationButton from "../../components/NavigationButton";
import PageLayout from "../../components/PageLayout";

const Edit = () => {
	return (
		<PageLayout>
			<NavigationButton text="add stats" path="/edit/add" />
			<NavigationButton text="update stats" path="/edit/update" />
		</PageLayout>
	);
};
export default Edit;
