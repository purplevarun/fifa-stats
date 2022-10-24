import Button from "../../components/Button";
import Layout from "../../components/Layout";

const Edit = () => {
	return (
		<Layout>
			<Button text="add stats" path="/edit/add" />
			<Button text="edit stats" path="/edit/edit" />
		</Layout>
	);
};
export default Edit;
