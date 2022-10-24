import { Navigate, Route, Routes } from "react-router-dom";
import Add from "../pages/Add/Add";
import Edit from "../pages/Edit/Edit";
import Home from "../pages/Home/Home";
import Update from "../pages/Update/Update";
import View from "../pages/View/View";

const RouteManager = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/view" element={<View />} />
			<Route path="/edit" element={<Edit />} />
			<Route path="/edit/add" element={<Add />} />
			<Route path="/edit/update" element={<Update />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
export default RouteManager;
