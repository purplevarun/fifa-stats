import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import FormLayout from "../components/FormLayout";
import HorizontalLayout from "../components/HorizontalLayout";
import NamePhotoButton from "../components/NamePhotoButton";
import StatusButton from "../components/StatusButton";

const UpdateStatus = () => {
	const {
		state: { name, photo },
	} = useLocation();
	const path = useLocation().pathname.split("/");
	const playerId = path[path.length - 1];

	const [showAlert, setShowAlert] = useState<
		null | "successful" | "unsuccessful"
	>(null);
	const navigate = useNavigate();
	const setAlert = (type: "successful" | "unsuccessful") => {
		setShowAlert(type);
		setTimeout(() => {
			setShowAlert(null);
			if (type === "successful") {
				navigate("/edit/status");
			}
		}, 2000);
	};
	return (
		<FormLayout>
			{showAlert && <AlertBox type={showAlert} />}
			<NamePhotoButton name={name} photo={photo} />
			<br />
			<HorizontalLayout>
				<StatusButton
					status="active"
					playerId={playerId}
					setAlert={setAlert}
				/>
				<StatusButton
					status="sold"
					playerId={playerId}
					setAlert={setAlert}
				/>
				<StatusButton
					status="retired"
					playerId={playerId}
					setAlert={setAlert}
				/>
			</HorizontalLayout>
		</FormLayout>
	);
};
export default UpdateStatus;
