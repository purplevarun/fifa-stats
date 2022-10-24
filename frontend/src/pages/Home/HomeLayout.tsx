import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "40px",
				width: "100%",
				height: "90vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{children}
		</div>
	);
};
export default HomeLayout;
