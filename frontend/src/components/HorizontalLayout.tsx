import { ReactNode } from "react";

const HorizontalLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				display: "flex",
				gap: "20px",
				alignItems: "center",
				width: "100%",
				justifyContent: "space-evenly",
			}}
		>
			{children}
		</div>
	);
};
export default HorizontalLayout;
