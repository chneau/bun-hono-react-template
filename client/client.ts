import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { hc, type InferRequestType } from "hono/client";
import type { ServerType } from "../server";

export const qc = new QueryClient();
export const api = hc<ServerType>("/").api;

export const useHelloQuery = (
	query: InferRequestType<typeof api.hello.$post>["json"],
) =>
	useQuery({
		queryKey: ["hello", query],
		queryFn: () => api.hello.$post({ json: query }).then((x) => x.json()),
	});

export const useIncrementMutation = () =>
	useMutation({
		mutationKey: ["increment"],
		mutationFn: () => api.increment.$post().then((x) => x.json()),
		onSuccess: () => qc.invalidateQueries({ queryKey: ["hello"] }),
	});
