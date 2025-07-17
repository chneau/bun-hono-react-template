import { QueryClientProvider } from "@tanstack/react-query";
import { Link, Route, Switch } from "wouter";
import { AboutUsPage } from "./AboutUsPage";
import { qc } from "./client";
import { HomePage } from "./HomePage";

export const App = () => (
	<QueryClientProvider client={qc}>
		<nav style={{ display: "flex", gap: "0.5rem" }}>
			<Link href="/">Home</Link>
			<Link href="/about">About Us</Link>
		</nav>
		<Switch>
			<Route path="/" component={HomePage} />
			<Route path="/about" component={AboutUsPage} />
			<Route>404: No such page!</Route>
		</Switch>
	</QueryClientProvider>
);
