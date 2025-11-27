import { zValidator } from "@hono/zod-validator";
import { serve } from "bun";
import { Hono } from "hono";
import z from "zod";
import index from "./client/index.html";

let counter = 0;

const app = new Hono()
	.basePath("/api")
	.post(
		"/hello",
		zValidator("json", z.object({ name: z.string().optional() }).optional()),
		(c) => {
			const name = c.req.valid("json")?.name;
			return c.json(`Hello ${name}, from the server! My current counter is ${counter}.`);
		},
	)
	.post("/increment", (c) => c.json(++counter))
	.notFound((c) => c.redirect("/"));

const server = serve({
	routes: {
		"/*": index,
		"/api/*": app.fetch,
	},
	development: Bun.env.NODE_ENV !== "production" && {
		hmr: true,
		console: true,
		chromeDevToolsAutomaticWorkspaceFolders: false,
	},
});
console.log(`🚀 Server running at ${server.url}`);

export type ServerType = typeof app;
