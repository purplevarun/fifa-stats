import Button from "../components/Button";

const BackButton = () => {
	return (
		<div style={{ position: "absolute", left: "10px", top: "10px" }}>
			<Button text="home" path="/" size="small" />
		</div>
	);
};
export default BackButton;
