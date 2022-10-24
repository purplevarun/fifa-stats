import Button from "../../components/Button";
import HomeLayout from "./HomeLayout";

const Home = () => {
	return (
		<HomeLayout>
			<Button text="view" path="/view" size="large" />
			<Button text="edit" path="/edit" size="large" />
		</HomeLayout>
	);
};
export default Home;
