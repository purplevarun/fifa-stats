import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "40px",
				width: "100%",
				minHeight: "90vh",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{children}
		</div>
	);
};
export default PageLayout;
