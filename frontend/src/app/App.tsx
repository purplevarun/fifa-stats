import { BrowserRouter } from "react-router-dom";
import RouteManager from "../routes/RouteManager";

const App = () => {
	return (
		<BrowserRouter basename="/fifa-stats">
			<RouteManager />
		</BrowserRouter>
	);
};
export default App;
