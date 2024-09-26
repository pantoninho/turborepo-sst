# turborepo + sst starter

This is a starter template for a typescript turborepo monorepo with [sst](https://sst.dev). It includes a nextJS app, an Astro app, a shared UI component library, and shared ESLint and TypeScript configurations.

## why

-   managing multiple typescript packages in a single repository is tough: turborepo makes it easier
-   easily deploying multiple applications and infrastructure with code is sweet: sst makes it sweeter

## folder structure

-   `apps/`: deployable applications
    -   `astro-webapp/`: an Astro app
    -   `docs/`: a nextJS app
-   `packages/`: shared libraries
    -   `ui/`: a shared UI component library
    -   `config-eslint/`: shared ESLint configurations
    -   `config-typescript/`: shared TypeScript configurations
    -   `config-tailwind/`: shared Tailwind CSS configurations
-   `sst/`: SST stacks
-   `sst.config.ts`: sst configuration
-   `turbo.json`: turborepo configuration

## getting started

-   setup an AWS account and configure your credentials
-   install dependencies: `npm i`
-   start developing: `npm run dev`
-   for more details, check out the [turborepo](https://turborepo.dev) and [sst](https://sst.dev) documentation.
