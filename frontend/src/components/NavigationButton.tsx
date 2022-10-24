import { useNavigate } from "react-router-dom";
import Button from "./Button";

type Props = {
	text: string;
	path: string;
	size?: "small" | "medium" | "large";
};

const NavigationButton = ({ path, text, size }: Props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(path);
	};

	return <Button text={text} size={size} handleClick={handleClick} />;
};
export default NavigationButton;
