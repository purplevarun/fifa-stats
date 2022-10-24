import { useNavigate } from "react-router-dom";

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
	const defaultSize = size ? size : "medium";
	const font = {
		small: "15px",
		medium: "25px",
		large: "40px",
	};
	const btnSize = font[defaultSize];
	const width = {
		small: "100px",
		medium: "200px",
		large: "250px",
	};
	const btnWidth = width[defaultSize];

	return (
		<button
			style={{
				padding: "10px",
				fontSize: btnSize,
				minWidth: btnWidth,
				borderRadius: "8px",
			}}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};
export default NavigationButton;
