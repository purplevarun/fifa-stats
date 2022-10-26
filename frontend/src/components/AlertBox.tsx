const AlertBox = ({ type }: { type: "successful" | "unsuccessful" }) => {
	const data = {
		successful: {
			text: "SUCCESSFUL",
			color: "green",
		},
		unsuccessful: {
			text: "UNSUCCESSFUL",
			color: "red",
		},
	};
	return (
		<div
			style={{
				width: "400px",
				height: "80px",
				marginTop: "50px",
				background: data[type].color,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h1>{data[type].text}</h1>
		</div>
	);
};
export default AlertBox;
