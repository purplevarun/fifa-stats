import { Navigate, Route, Routes } from "react-router-dom";
import AddPlayer from "../pages/AddPlayer";
import Edit from "../pages/Edit/Edit";
import Home from "../pages/Home/Home";
import Players from "../pages/Players/Players";
import Seasons from "../pages/Seasons/Seasons";
import SelectPlayerToUpdate from "../pages/SelectPlayerToUpdate";
import Update from "../pages/Update/Update";
import UpdatePlayer from "../pages/UpdatePlayer";
import UpdateStatus from "../pages/UpdateStatus";
import View from "../pages/View/View";

const RouteManager = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/view" element={<View />} />
			<Route path="/view/players" element={<Players />} />
			<Route path="/view/seasons" element={<Seasons />} />
			<Route path="/edit" element={<Edit />} />
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
