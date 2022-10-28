import { ReactNode } from "react";

const PlayerDetailsLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				flexDirection: "column",
				width: "90%",
				padding: "20px",
				borderWidth: "4px",
				borderStyle: "solid",
				borderColor: "black",
			}}
		>
			{children}
		</div>
	);
};
export default PlayerDetailsLayout;
