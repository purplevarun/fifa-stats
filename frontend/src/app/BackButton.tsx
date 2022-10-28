import NavigationButton from "../components/NavigationButton";

const BackButton = () => {
	return (
		<div style={{ position: "fixed", left: "10px", top: "10px" }}>
			<NavigationButton text="home" path="/" size="small" />
		</div>
	);
};
export default BackButton;
