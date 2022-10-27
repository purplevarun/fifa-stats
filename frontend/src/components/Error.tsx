import PageLayout from "./PageLayout";

const Error = ({ type }: { type: "loading" | "error" }) => {
	const data = {
		loading: {
			text: "LOADING ...",
			color: "orange",
		},
		error: {
			text: "ERROR !!",
			color: "red",
		},
	};
	const text = data[type].text;
	const color = data[type].color;
	return (
		<PageLayout>
			<div style={{ backgroundColor: color, padding: "40px" }}>
				<h1>{text}</h1>
			</div>
		</PageLayout>
	);
};
export default Error;
