type Props = {
	text: string;
	size?: "small" | "medium" | "large";
	handleClick: () => void;
};
const Button = ({ text, handleClick, size }: Props) => {
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
export default Button;
