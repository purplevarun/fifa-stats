import Button from "../../components/Button";
import Layout from "../../components/Layout";

const Edit = () => {
	return (
		<Layout>
			<Button text="add stats" path="/edit/add" />
			<Button text="update stats" path="/edit/update" />
		</Layout>
	);
};
export default Edit;
