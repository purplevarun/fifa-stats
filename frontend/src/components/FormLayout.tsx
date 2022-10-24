import { ReactNode } from "react";

const FormLayout = ({ children }: { children: ReactNode }) => {
	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "40px",
				width: "100%",
				minHeight: "90vh",
				justifyContent: "center",
				alignItems: "center",
			}}
			onSubmit={(event) => event.preventDefault()}
		>
			{children}
		</form>
	);
};
export default FormLayout;
