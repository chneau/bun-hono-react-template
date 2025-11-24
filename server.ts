import { zValidator } from "@hono/zod-validator";
import { serve } from "bun";
import { Hono } from "hono";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import { requestId } from "hono/request-id";
import { timing } from "hono/timing";
import { trimTrailingSlash } from "hono/trailing-slash";
import z from "zod";
import index from "./client/index.html";

process.on("SIGINT", () => process.exit());

let counter = 0;

const app = new Hono()
	.onError((err, c) => {
		console.error("=== Caught Error ===\n", err);
		return c.text(err.message, 500);
	})
	.use(
		logger(
			(x) =>
				x.startsWith("-") && !x.startsWith("--> OPTIONS") && console.log(x),
		),
	)
	.use(etag())
	.use(timing({ crossOrigin: true }))
	.use(cors())
	.use(trimTrailingSlash())
	.use(compress())
	.use(requestId())
	.basePath("/api")
	.post(
		"/hello",
		zValidator("json", z.object({ name: z.string().optional() }).optional()),
		(c) => {
			const name = c.req.valid("json")?.name;
			return c.json({
				message: `Hello ${name}, from the server! My current counter is ${counter}.`,
			});
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
