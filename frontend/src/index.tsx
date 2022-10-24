import ReactDOM from "react-dom/client";
import RouteManager from "./routes/RouteManager";

const app = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(app);
root.render(<RouteManager />);
