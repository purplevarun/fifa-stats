import axios from "axios";

type Props = {
	status: "active" | "sold" | "retired";
	playerId: string;
	setAlert: (newAlert: "successful" | "unsuccessful") => void;
};

const StatusButton = ({ status, playerId, setAlert }: Props) => {
	const map = { active: "green", sold: "red", retired: "orange" };
	const bgColor = map[status];
	const handleClick = async () => {
		const url = process.env.REACT_APP_API_URL + "/update-player-status";

		const formData = { playerId, newStatus: status };
		const response = await axios.put(url, formData);
		setAlert(response.data === 200 ? "successful" : "unsuccessful");
	};

	return (
		<button
			style={{
				padding: "10px",
				fontSize: "30px",
				background: bgColor,
			}}
			onClick={handleClick}
		>
			{status}
		</button>
	);
};
export default StatusButton;
