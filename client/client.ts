import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { hc, type InferRequestType } from "hono/client";
import type { ServerType } from "../server";

export const qc = new QueryClient();
const api = hc<ServerType>("/").api;

export const useHelloQuery = (
	query: InferRequestType<typeof api.hello.$post>["json"],
) =>
	useQuery({
		queryKey: ["hello", query],
		queryFn: async () => {
			const res = await api.hello.$post({ json: query });
			if (!res.ok) throw new Error(res.statusText);
			return await res.json();
		},
	});

export const useIncrementMutation = () =>
	useMutation({
		mutationKey: ["increment"],
		mutationFn: async () => {
			const res = await api.increment.$post();
			if (!res.ok) throw new Error(res.statusText);
			return await res.json();
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["hello"] }),
	});
