import { createRoot } from "react-dom/client";
import { App } from "./App";

const elem = document.getElementById("root") as Element;
if (import.meta.hot) {
	import.meta.hot.data.root ??= createRoot(elem);
	import.meta.hot.data.root.render(<App />);
} else {
	createRoot(elem).render(<App />);
}
