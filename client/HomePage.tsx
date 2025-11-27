import { useState } from "react";
import { useHelloQuery, useIncrementMutation } from "./client";

export const HomePage = () => {
	const [name, setName] = useState<string>("world");
	const hello = useHelloQuery({ name });
	const increment = useIncrementMutation();
	return (
		<div>
			<title>Home</title>
			<h1>Bun, Hono, React, Wouter and React-Query</h1>
			<p>
				Edit <code>client/HomePage.tsx</code> and save to test HMR
			</p>
			<p>
				Message: <strong>{hello.data}</strong>
			</p>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your name"
			/>
			<button
				type="button"
				onClick={() => increment.mutate()}
				disabled={increment.isPending}
			>
				{increment.isPending ? "Incrementing..." : "Increment"}
			</button>
		</div>
	);
};
