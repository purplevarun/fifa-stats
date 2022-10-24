import HomeBtn from "./HomeBtn";
import HomeLayout from "./HomeLayout";

const Home = () => {
	return (
		<HomeLayout>
			<HomeBtn path="/view" />
			<HomeBtn path="/edit" />
		</HomeLayout>
	);
};
export default Home;
