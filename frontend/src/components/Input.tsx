type Props = {
	value: string;
	setValue: (value: string) => void;
	placeholder: string;
	type: "text" | "number";
	size: "small" | "medium" | "large";
};
type eventType = {
	target: {
		value: string;
	};
};

const Input = ({ value, setValue, placeholder, type, size }: Props) => {
	const handleChange = (event: eventType) => {
		const newValue = event.target.value;
		if (type === "number") {
			const alphabets = /[a-zA-Z]/g;
			if (!alphabets.test(newValue)) {
				setValue(newValue);
			}
		} else {
			setValue(newValue);
		}
	};
	const widthMap = {
		small: "200px",
		medium: "300px",
		large: "400px",
	};
	const inputWidth = widthMap[size];
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<h3>{placeholder}</h3>
			<input
				type="text"
				style={{
					padding: "10px",
					fontSize: "20px",
					borderStyle: "solid",
					borderWidth: "2px",
					borderColor: "black",
					borderRadius: "10px",
					width: inputWidth,
				}}
				value={value}
				onChange={handleChange}
				required
			/>
		</div>
	);
};
export default Input;
