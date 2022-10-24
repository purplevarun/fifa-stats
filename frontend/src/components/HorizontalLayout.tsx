import { ReactNode } from "react";

const HorizontalLayout = ({ children }: { children: ReactNode }) => {
	return <div style={{ display: "flex", gap: "20px" }}>{children}</div>;
};
export default HorizontalLayout;
