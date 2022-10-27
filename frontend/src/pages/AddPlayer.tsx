import axios from "axios";
import { useEffect, useState } from "react";
import AlertBox from "../components/AlertBox";
import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import Input from "../components/Input";
import isComplete from "../lib/isComplete";

const AddPlayer = () => {
	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("");
	const [age, setAge] = useState("");
	const [nationality, setNationality] = useState("");
	const [position, setPosition] = useState("");
	const [showAlert, setShowAlert] = useState<
		null | "successful" | "unsuccessful"
	>(null);

	const setAlert = (type: "successful" | "unsuccessful") => {
		setShowAlert(type);
		setTimeout(() => {
			setShowAlert(null);
		}, 2000);
	};
	const clearStates = () => {
		setName("");
		setPhoto("");
		setAge("");
		setNationality("");
		setPosition("");
	};
	const handleClick = async () => {
		const data = { name, photo, age: parseInt(age), nationality, position };
		if (isComplete(data)) {
			const url = process.env.REACT_APP_API_URL + "/add-player";
			const response = await axios.post(url, data);
			if (response.data.status === 201) {
				clearStates();
				setAlert("successful");
			} else {
				setAlert("unsuccessful");
			}
		} else {
			setAlert("unsuccessful");
		}
	};

	const [renderPhoto, setRenderPhoto] = useState(false);

	useEffect(() => {
		setRenderPhoto(photo.length > 0);
	}, [photo]);

	return (
		<FormLayout>
			{showAlert && <AlertBox type={showAlert} />}
			<Input
				value={name}
				setValue={setName}
				placeholder="name"
				type="text"
				size="large"
			/>
			{renderPhoto ? (
				<img src={photo} alt="player" width={150} />
			) : (
				<Input
					value={photo}
					setValue={setPhoto}
					placeholder="photo"
					type="text"
					size="large"
				/>
			)}
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
