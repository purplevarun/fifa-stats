import { ReactNode, useState } from "react";

const PlayerDetailsLayout = ({ children }: { children: ReactNode }) => {
	const [shrunk, setShrunk] = useState(true);
	const toggleHeight = () => {
		setShrunk((prev) => !prev);
	};
	return (
		<div
			style={{
				flexDirection: "column",
				width: "90%",
				height: shrunk ? "200px" : "100%",
				padding: "20px",
				borderWidth: "4px",
				borderStyle: "solid",
				borderColor: "black",
				overflow: "hidden",
				cursor: "pointer",
			}}
			onClick={toggleHeight}
		>
			{children}
		</div>
	);
};
export default PlayerDetailsLayout;
