import { useNavigate } from "react-router-dom";

type Props = {
	text: string;
	path: string;
	size?: "small" | "medium" | "large";
};

const Button = ({ path, text, size }: Props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(path);
	};
	const font = {
		small: "15px",
		medium: "25px",
		large: "40px",
	};
	const btnSize = font[size ? size : "medium"];

	return (
		<button
			style={{
				padding: "10px",
				fontSize: btnSize,
				width: "150px",
				borderRadius: "8px",
			}}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};
export default Button;
