import { useState } from "react";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import Input from "../components/Input";

const AddPlayer = () => {
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("");
	const [age, setAge] = useState("");
	const [nationality, setNationality] = useState("");
	const [position, setPosition] = useState("");

	const handleClick = async () => {
		const data = { name, photo, age, nationality, position };
		const url = process.env.REACT_APP_API_URL + "/add-player";
	};

	return (
		<FormLayout>
			<Input
				value={name}
				setValue={setName}
				placeholder="name"
				type="text"
				size="large"
			/>
			<Input
				value={photo}
				setValue={setPhoto}
				placeholder="photo"
				type="text"
				size="large"
			/>
			<Input
				value={age}
				setValue={setAge}
				placeholder="age"
				type="number"
				size="small"
			/>
			<Input
				value={nationality}
				setValue={setNationality}
				placeholder="nationality"
				type="text"
				size="medium"
			/>
			<Input
				value={position}
				setValue={setPosition}
				placeholder="position"
				type="text"
				size="small"
			/>
			<br />
			<Button text="add player" handleClick={handleClick} />
		</FormLayout>
	);
};
export default AddPlayer;
