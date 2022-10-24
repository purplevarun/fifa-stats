type Props = {
	value: string;
	setValue: (value: string) => void;
	placeholder: string;
	type: "text" | "number";
};
type eventType = {
	target: {
		value: string;
	};
};

const Input = ({ value, setValue, placeholder, type }: Props) => {
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
	return (
		<input
			type="text"
			placeholder={placeholder}
			style={{
				padding: "10px",
				fontSize: "20px",
				borderStyle: "solid",
				borderWidth: "2px",
				borderColor: "black",
				borderRadius: "10px",
				width: "400px",
			}}
			value={value}
			onChange={handleChange}
		/>
	);
};
export default Input;
