
FROM oven/bun AS build
WORKDIR /app
COPY package.json bun.lock .
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun AS final
USER 1000
WORKDIR /app
COPY --chown=1000 --from=build /app/dist .
ENTRYPOINT ["bun", "server.js"]