# bun-hono-react-template

This is a small template using Bun, Hono, React, Wouter and React-Query.

## Features

This template is designed for simplicity and developer efficiency:

- **Unified Tooling**: Bun handles everything from running React to serving both
  client and API, reducing the number of tools you need to manage.
- **RPC-style API**: Hono facilitates clean, RPC-style API calls, making
  client-server communication straightforward.
- **Strong Typing with Zod**: Zod ensures robust type-checking and validation
  for all RPC calls, enhancing data integrity and developer confidence.
- **Single Dockerfile**: A single Dockerfile simplifies deployment and local
  development setup.
- **Developer-Friendly**: Minimal tooling and clear structure ensure a smooth
  development experience.
- **Simplified Routing**: Wouter makes routing intuitive and easy to manage,
  enhancing navigation within your application.
- **Minimal Dependencies**: Focuses on a lean stack with only 5 core
  dependencies (Zod, React-Query, Hono, React, Wouter), streamlining development
  and reducing project overhead.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chneau/bun-hono-react-template.git
   ```
2. Install the dependencies:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run dev
   ```

## Available Scripts

- `dev`: Starts the development server with hot reloading.
- `start`: Starts the production server.
- `build`: Builds the project for production.
- `run-dist`: Runs the production build.
- `docker-build`: Builds the Docker image.
- `run-docker`: Runs the Docker container.
- `upgrade`: Upgrades the dependencies to the latest version.
- `check`: Formats the code, lints it and checks for errors.
- `lint`: Checks for TypeScript errors.
- `all`: Runs all the checks and upgrades the dependencies.
