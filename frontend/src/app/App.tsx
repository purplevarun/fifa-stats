import { BrowserRouter } from "react-router-dom";
import RouteManager from "../routes/RouteManager";
import BackButton from "./BackButton";

const App = () => {
	return (
		<BrowserRouter basename="/fifa-stats">
			<BackButton />
			<RouteManager />
		</BrowserRouter>
	);
};
export default App;
