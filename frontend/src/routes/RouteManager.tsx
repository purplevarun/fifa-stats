import { Navigate, Route, Routes } from "react-router-dom";
import AddPlayer from "../pages/AddPlayer";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import SelectPlayerToUpdate from "../pages/SelectPlayerToUpdate";
import UpdatePlayer from "../pages/UpdatePlayer";
import UpdateStatus from "../pages/UpdateStatus";
import ViewPage from "../pages/ViewPage";
import ViewPlayers from "../pages/ViewPlayers";
import ViewSeasons from "../pages/ViewSeasons";

const RouteManager = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/view" element={<ViewPage />} />
			<Route path="/view/players/:sorter" element={<ViewPlayers />} />
			<Route path="/view/seasons" element={<ViewSeasons />} />
			<Route path="/edit" element={<EditPage />} />
			<Route path="/edit/add" element={<AddPlayer />} />
			<Route path="/edit/update" element={<SelectPlayerToUpdate />} />
			<Route path="/edit/update/:playerID" element={<UpdatePlayer />} />
			<Route path="/edit/status" element={<SelectPlayerToUpdate />} />
			<Route path="/edit/status/:playerID" element={<UpdateStatus />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
export default RouteManager;
