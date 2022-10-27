import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import RouteManager from "../routes/RouteManager";
import BackButton from "./BackButton";

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter basename="/fifa-stats">
				<BackButton />
				<RouteManager />
			</BrowserRouter>
		</QueryClientProvider>
	);
};
export default App;
