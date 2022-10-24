import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";

const Edit = () => {
	return (
		<PageLayout>
			<Button text="add stats" path="/edit/add" />
			<Button text="update stats" path="/edit/update" />
		</PageLayout>
	);
};
export default Edit;
