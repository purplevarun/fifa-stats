import { useNavigate } from "react-router-dom";

const HomeBtn = ({ path }: { path: string }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(path);
	};
	const text = path.slice(1);
	return (
		<button
			style={{
				padding: "10px",
				fontSize: "40px",
				width: "150px",
				borderRadius: "8px",
			}}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};
export default HomeBtn;
