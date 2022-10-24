import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Edit from "../pages/Edit/Edit";
import Home from "../pages/Home/Home";
import View from "../pages/View/View";

const RouteManager = () => {
	return (
		<BrowserRouter basename="/fifa-stats">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/view" element={<View />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
};
export default RouteManager;
