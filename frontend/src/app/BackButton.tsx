import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NavigationButton from "../components/NavigationButton";

const BackButton = () => {
	const navigate = useNavigate();
	const backClick = () => {
		navigate(-1);
	};
	return (
		<div
			style={{
				position: "fixed",
				left: "10px",
				top: "10px",
				gap: "10px",
				display: "flex",
			}}
		>
			<NavigationButton text="home" path="/" size="small" />
			<Button text="back" size="small" handleClick={backClick} />
		</div>
	);
};
export default BackButton;
