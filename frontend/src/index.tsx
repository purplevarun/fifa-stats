import ReactDOM from "react-dom/client";
import App from "./app/App";

const app = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(app);
root.render(<App />);
