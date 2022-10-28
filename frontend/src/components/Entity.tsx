const Entity = ({ name, value }: { name: string; value: string | number }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "5px",
				width: "200px",
				padding: "10px",
			}}
		>
			<p>{name}</p>
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
