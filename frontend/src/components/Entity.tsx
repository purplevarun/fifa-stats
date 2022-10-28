const Entity = ({ name, value }: { name: string; value: string | number }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "5px",
			}}
		>
			<h2>{name}</h2>
			<div
				style={{
					borderWidth: "2px",
					borderStyle: "solid",
					borderColor: "black",
					padding: "5px",
				}}
			>
				{value}
			</div>
		</div>
	);
};
export default Entity;
