# bun-hono-react-template

A lightweight, full-stack template using **Bun**, **Hono**, **React 19**,
**Wouter**, and **React-Query**.

## ⚡ Features

- **Unified & Fast**: Bun serves the API, bundles the frontend, and runs the dev
  server.
- **Type-Safe RPC**: End-to-end type safety between client and server using Hono
  RPC & Zod.
- **Modern Stack**: React 19, Wouter for routing, and TanStack Query for state.
- **Production Ready**: Multi-stage Dockerfile and optimized build outputs.
- **Minimalist**: No complex build tools (Webpack/Vite) required, just Bun!

## 🚀 Quick Start

**Prerequisite**: [Install Bun](https://bun.sh)

1. **Clone & Install**

   ```bash
   git clone https://github.com/chneau/bun-hono-react-template.git
   cd bun-hono-react-template
   bun install
   ```

2. **Run Dev Server** (Hot Reloading)
   ```bash
   bun dev
   ```
   Visit `http://localhost:3000`

## 📂 Structure

- **`client/`**: React frontend code (pages, components).
- **`server.ts`**: Hono backend and Bun build configuration.

## 🛠 Scripts

| Script                 | Description                                           |
| :--------------------- | :---------------------------------------------------- |
| `bun dev`              | Start dev server with HMR                             |
| `bun start`            | Run production server                                 |
| `bun run build`        | Compile for production (`dist/`)                      |
| `bun run check`        | Run formatters/linters (requires Deno, Oxlint, Biome) |
| `bun run docker-build` | Build Docker image                                    |
